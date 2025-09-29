import { db } from "@/lib/db";
import { categories } from "@/drizzle/schema/categories";
import { z } from "zod";
import jsonCategories from "../data/categories.json" assert { type: "json" };

const trimmed = z.string().trim().min(1);

const CategorySchema = z
  .object({
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
  })
  .strict();

type Category = z.infer<typeof CategorySchema>;

async function main() {
  const validatedCategories = jsonCategories
    .map((c) => CategorySchema.safeParse(c))
    .filter(
      (result): result is { success: true; data: Category } => result.success
    )
    .map((result) => result.data);

  if (validatedCategories.length === 0) {
    console.error("No entries in validatedCategories");
    return;
  }
  await db.transaction(async (tx) => {
    for (const r of validatedCategories) {
      await tx.insert(categories).values({
        name: r.name,
        slug: r.slug,
        imageAlt: r.imageAlt,
        imageUrl: r.imageUrl,
        imageMeta: r.imageMeta,
      });
    }
  });
}

main().catch((error) => {
  console.error("Failed to insert categories to Database.", error);
  process.exit(1);
});
