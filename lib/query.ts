import { db } from "@/lib/db";
import { categories } from "@/drizzle/schema/categories";
import { topics } from "@/drizzle/schema/topics";
import { eq } from "drizzle-orm";
export async function getCategories() {
  const rows = await db.select().from(categories);
  if (rows.length === 0) {
    throw new Error("No categories found");
  }
  return rows;
}

export async function getTopicsByCategorySlug(slug: string) {
  const rows = await db
    .select()
    .from(topics)
    .innerJoin(categories, eq(topics.categoryId, categories.id))
    .where(eq(categories.slug, slug));

  return rows.map((row) => row.topics);
}
