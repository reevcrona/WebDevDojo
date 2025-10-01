import { db } from "@/lib/db";
import { categories } from "@/drizzle/schema";
import { topics } from "@/drizzle/schema";
import { z } from "zod";
import seedData from "../data/seed-data.json" assert { type: "json" };

const trimmed = z.string().trim().min(1);

const CategorySchema = z.object({
  name: trimmed,
  slug: trimmed.refine((s) => s === s.toLowerCase(), {
    message: "Slug must be lowercase",
  }),
  imageAlt: trimmed.max(120, "Keep alt text concise (<120 chars)"),
  imageUrl: trimmed.url().refine((u) => u.startsWith("https://"), {
    message: "Image URL must start with https://",
  }),
  imageMeta: z.object({
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  }),
});

const TopicSchema = z.object({
  name: trimmed,
  slug: trimmed.refine((s) => s === s.toLowerCase(), {
    message: "Slug must be lowercase",
  }),
  summary: z.string().trim().optional(),
});

const SeedDataSchema = z.record(
  z.string(),
  z.object({
    category: CategorySchema,
    topics: z.array(TopicSchema),
  })
);

async function main() {
  const validated = SeedDataSchema.safeParse(seedData);

  if (!validated.success) {
    console.error("Invalid seed data:", validated.error);
    return;
  }

  const data = validated.data;

  console.log("Clearing existing data...");
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
          imageAlt: category.imageAlt,
          imageUrl: category.imageUrl,
          imageMeta: category.imageMeta,
        })
        .returning({ id: categories.id });
      console.log(`Inserted category: ${category.name}`);

      if (categoryTopics.length > 0) {
        await tx.insert(topics).values(
          categoryTopics.map((topic) => ({
            name: topic.name,
            slug: topic.slug,
            categoryId: insertedCategory.id,
            summary: topic.summary || null,
          }))
        );

        console.log(
          `✅ Inserted ${categoryTopics.length} topics for ${category.name}`
        );
      }
    }
  });
  console.log("🎉 Seeding completed successfully!");
  process.exit(0);
}

main().catch((error) => {
  console.error("❌ Seeding failed:", error);
  process.exit(1);
});
