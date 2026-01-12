import { db } from "@/lib/db";
import { categories, topicOverviews } from "@/drizzle/schema";
import { topics } from "@/drizzle/schema";
import { z } from "zod";
import { SEED_DATA } from "../data/seed-data";
import { SUB_CATEGORIES, ENVIRONMENTS } from "@/types/constants";
import { runRelatedSeed } from "../seed-related-topics";
import { runTopicResourceSeed } from "./seed-topic-resources";

const trimmed = z.string().trim().min(1);

const TopicDataSchema = z.object({
  mdx: trimmed,
});

const CategorySchema = z.object({
  name: trimmed,
  slug: trimmed.refine((s) => s === s.toLowerCase(), {
    message: "Slug must be lowercase",
  }),
});

const TopicSchema = z.object({
  name: trimmed,
  slug: trimmed.refine((s) => s === s.toLowerCase(), {
    message: "Slug must be lowercase",
  }),
  summary: z.string().trim().optional(),
  environment: z.enum(ENVIRONMENTS).default("CLIENT SIDE"),
  subcategories: z.enum(SUB_CATEGORIES).default("NONE"),
  topicsData: TopicDataSchema.optional(),
});

const SeedDataSchema = z.record(
  z.string(),
  z.object({
    category: CategorySchema,
    topics: z.array(TopicSchema),
  })
);

async function main() {
  const validated = SeedDataSchema.safeParse(SEED_DATA);

  if (!validated.success) {
    console.error("Invalid seed data:", validated.error);
    return;
  }

  const data = validated.data;

  console.log("Clearing existing data...");
  await db.delete(topicOverviews);
  await db.delete(topics);
  await db.delete(categories);

  console.log("Data cleared");

  await db.transaction(async (tx) => {
    for (const [_key, { category, topics: categoryTopics }] of Object.entries(
      data
    )) {
      const [insertedCategory] = await tx
        .insert(categories)
        .values({
          name: category.name,
          slug: category.slug,
        })
        .returning({ id: categories.id });
      console.log(`Inserted category: ${category.name}`);

      if (categoryTopics.length > 0) {
        const insertedTopics = await tx
          .insert(topics)
          .values(
            categoryTopics.map((topic) => ({
              name: topic.name,
              slug: topic.slug,
              categoryId: insertedCategory.id,
              environment: topic.environment,
              subcategories: topic.subcategories,
              summary: topic.summary || null,
            }))
          )
          .returning({ id: topics.id });

        console.log(
          `✅ Inserted ${categoryTopics.length} topics for ${category.name}`
        );
        const overviewRows = categoryTopics.flatMap((topic, index) => {
          if (!topic.topicsData) return [];
          return [
            {
              mdx: topic.topicsData.mdx,
              topicId: insertedTopics[index].id,
            },
          ];
        });
        if (overviewRows.length > 0) {
          await tx.insert(topicOverviews).values(overviewRows);
          console.log(
            `📝 Inserted ${overviewRows.length} topicOverviews for ${category.name}`
          );
        }
      }
    }
    await runRelatedSeed(tx);
    await runTopicResourceSeed(tx);
  });

  console.log("🎉 Seeding completed successfully!");
  process.exit(0);
}

main().catch((error) => {
  console.error("❌ Seeding failed:", error);
  process.exit(1);
});
