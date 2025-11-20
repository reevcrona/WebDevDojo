import { topics } from "@/drizzle/schema";
import type { Transaction } from "@/types/db-types";

export type TopicsSlugRow = {
  id: string;
  slug: string;
};

export type TopicsBySlugMap = Record<string, TopicsSlugRow>;

export async function getTopicsBySlugMap(
  tx: Transaction
): Promise<TopicsBySlugMap> {
  const rows = await tx
    .select({ id: topics.id, slug: topics.slug })
    .from(topics);

  return Object.fromEntries(rows.map((t) => [t.slug, t]));
}
