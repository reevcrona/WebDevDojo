// seeders/seed-questions.ts
import { eq } from "drizzle-orm";
import { z } from "zod";
import { topics, questions, questionOptions } from "@/drizzle/schema";
import { questionsSeedData } from "@/scripts/data/questions-data";

const trimmed = z.string().trim().min(1);

const QuestionSchema = z.object({
  topic: trimmed,
  prompt: trimmed,
  explanation: z.string().trim().optional(),
  options: z
    .array(z.tuple([trimmed, z.boolean()]))
    .min(2, "A question needs at least 2 options")
    .refine(
      (opts) => opts.some(([, isCorrect]) => isCorrect),
      "At least one option must be marked correct",
    ),
});

const QuestionsSeedSchema = z.array(QuestionSchema);

export async function runQuestionsSeed(tx: any) {
  const validated = QuestionsSeedSchema.safeParse(questionsSeedData);
  if (!validated.success) {
    throw new Error(
      `Invalid questions seed data: ${JSON.stringify(validated.error.issues, null, 2)}`,
    );
  }

  // Group by topic slug so position counters reset per topic
  const byTopic = new Map<string, typeof validated.data>();
  for (const question of validated.data) {
    if (!byTopic.has(question.topic)) byTopic.set(question.topic, []);
    byTopic.get(question.topic)!.push(question);
  }

  for (const [topicSlug, topicQuestions] of byTopic) {
    const topic = await tx.query.topics.findFirst({
      where: eq(topics.slug, topicSlug),
      columns: { id: true },
    });

    if (!topic) {
      console.warn(
        `⚠️  Topic "${topicSlug}" not found, skipping ${topicQuestions.length} questions`,
      );
      continue;
    }

    for (const [index, question] of topicQuestions.entries()) {
      const [insertedQuestion] = await tx
        .insert(questions)
        .values({
          topicId: topic.id,
          prompt: question.prompt,
          explanation: question.explanation,
          position: index,
        })
        .returning({ id: questions.id });

      await tx.insert(questionOptions).values(
        question.options.map(([label, isCorrect], optIndex) => ({
          questionId: insertedQuestion.id,
          label,
          isCorrect,
          position: optIndex,
        })),
      );
    }

    console.log(
      `❓ Inserted ${topicQuestions.length} questions for ${topicSlug}`,
    );
  }
}
