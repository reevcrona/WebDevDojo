import { db } from "@/lib/db";
import { categories } from "@/server/db/schema/categories";
import { z } from "zod";
import { sql } from "drizzle-orm";
import jsonCategories from "../data/categories.json" assert { type: "json" };

const CategorySchema = z.object({
  name: z.string().min(1),
  imageUrl: z.string().regex(/^\/[\w-]+\.(png|jpg|webp)$/i),
  imageMeta: z.object({
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  }),
});

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
      await tx
        .insert(categories)
        .values({
          name: r.name,
          imageUrl: r.imageUrl,
          imageMeta: r.imageMeta,
        })
        .onConflictDoUpdate({
          target: categories.id,
          set: {
            imageMeta: sql`excluded.image_meta`,
          },
        });
    }
  });
}

main().catch((error) => {
  console.error("Failed to insert categories to Database.", error);
  process.exit(1);
});
