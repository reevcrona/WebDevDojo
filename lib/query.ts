import { db } from "@/lib/db";
import { categories } from "@/drizzle/schema/categories";
import { relatedTopics } from "@/drizzle/schema";
import { eq, ilike, or, and, desc, inArray, asc } from "drizzle-orm";
import { topics } from "@/drizzle/schema";
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

export async function getRelatedTopics(slug: string) {
  const topic = await db.query.topics.findFirst({
    where: eq(topics.slug, slug),
    columns: {
      id: true,
    },
  });

  if (!topic) {
    return [];
  }

  const related = await db
    .select({
      id: topics.id,
      name: topics.name,
      slug: topics.slug,
      summary: topics.summary,
      weight: relatedTopics.weight,
      categoryName: categories.name,
    })
    .from(relatedTopics)
    .innerJoin(topics, eq(relatedTopics.relatedTopicId, topics.id))
    .innerJoin(categories, eq(topics.categoryId, categories.id))
    .where(eq(relatedTopics.topicId, topic.id))
    .orderBy(asc(relatedTopics.weight));

  return related;
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

export async function getTopicBySlug(slug: string) {
  return db.query.topics.findFirst({
    where: (t, { eq }) => eq(t.slug, slug),
  });
}

export async function getTopicOverviewBySlug(slug: string) {
  const topic = await db.query.topics.findFirst({
    where: (t, { eq }) => eq(t.slug, slug),
    columns: { id: true, name: true, summary: true },
  });

  if (!topic) return;

  const overview = await db.query.topicOverviews.findFirst({
    where: (t, { eq }) => eq(t.topicId, topic.id),
  });

  if (!overview) return null;

  return { ...overview, topic };
}

export async function getFilteredTopics(
  query: string,
  categorySlugs: string[] = []
) {
  const raw = (query ?? "").trim();
  const hasQuery = raw.length > 0;
  const q = `%${raw}%`;
  const hasCats = categorySlugs.length > 0;
  try {
    const base = db
      .select({
        id: topics.id,
        name: topics.name,
        summary: topics.summary,
        slug: topics.slug,
        createdAt: topics.createdAt,
        updatedAt: topics.updatedAt,
        categoryId: topics.categoryId,
        categoryName: categories.name,
        categorySlug: categories.slug,
      })
      .from(topics)
      .innerJoin(categories, eq(topics.categoryId, categories.id));

    const conditions = [];

    if (hasQuery) {
      conditions.push(
        or(
          ilike(topics.name, q),
          ilike(topics.slug, q),
          ilike(topics.summary, q),
          ilike(categories.name, q)
        )
      );
    }

    if (hasCats) {
      conditions.push(inArray(categories.slug, categorySlugs));
    }

    const builder = conditions.length ? base.where(and(...conditions)) : base;

    const rows = await builder.orderBy(desc(topics.createdAt));

    return rows;
  } catch (error) {
    console.error("Failed to fetch filtered topics", error);
  }
}
