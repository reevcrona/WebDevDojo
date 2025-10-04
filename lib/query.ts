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

export async function getTopics() {
  const data = await db.query.topics.findMany({
    with: {
      category: true,
    },
  });

  return data.map((t) => ({
    id: t.id,
    name: t.name,
    slug: t.slug,
    summary: t.summary,
    categoryName: t.category.name,
  }));
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
