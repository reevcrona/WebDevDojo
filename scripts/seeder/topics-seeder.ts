import { db } from "@/lib/db";
import { topics } from "@/drizzle/schema/topics";
import { z } from "zod";
import jsonTopics from "../data/topics.json" assert { type: "json" };

const trimmed = z.string().trim().min(1);

const TopicsSchema = z
  .object({
    categoryId: z.uuid(),
    name: trimmed,
    slug: trimmed.refine((s) => s === s.toLowerCase(), {
      message: "Slug must be lowercase",
    }),
    summary: trimmed.optional(),
  })
  .strict();

type Topic = z.infer<typeof TopicsSchema>;

async function main() {
  const validatedCategories = jsonTopics
    .map((c) => TopicsSchema.safeParse(c))
    .filter(
      (result): result is { success: true; data: Topic } => result.success
    )
    .map((result) => result.data);

  if (validatedCategories.length === 0) {
    console.error("No entries in validatedCategories");
    return;
  }
  await db.transaction(async (tx) => {
    for (const r of validatedCategories) {
      await tx.insert(topics).values({
        categoryId: r.categoryId,
        name: r.name,
        slug: r.slug,
        summary: r.summary,
      });
    }
  });
}

main()
  .then(() => {
    console.log("Insert sucessful");
  })
  .catch((error) => {
    console.error("Failed to insert", error);
  });
