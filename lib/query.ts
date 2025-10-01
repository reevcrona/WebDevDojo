import { db } from "@/lib/db";
import { categories } from "@/drizzle/schema/categories";
import { eq } from "drizzle-orm";
export async function getCategories() {
  const rows = await db.select().from(categories);
  if (rows.length === 0) {
    throw new Error("No categories found");
  }
  return rows;
}

export async function getTopicsByCategorySlug(slug: string) {
  const category = db
    .select({ id: categories.id })
    .from(categories)
    .where(eq(categories.slug, slug));

  return db.query.topics.findMany({
    where: (t, { inArray }) => inArray(t.categoryId, category),
  });
}
