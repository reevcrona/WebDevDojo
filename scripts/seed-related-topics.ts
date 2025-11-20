import { relatedTopics } from "@/drizzle/schema";
import { getTopicsBySlugMap } from "./seeder/seeder-utils/topicsBySlug";
import { relatedSeedData } from "./data/related-topics-data";
import type { Transaction } from "../types/db-types";

export const runRelatedSeed = async (tx: Transaction) => {
  console.log("Loaindg topics...");
  const topicsBySlug = await getTopicsBySlugMap(tx);

  const values = relatedSeedData.map(([topicSlug, relatedSlug, weight]) => {
    const topic = topicsBySlug[topicSlug];
    const related = topicsBySlug[relatedSlug];

    if (!topic) {
      throw new Error(`Topic not found for slug: ${topicSlug}`);
    }
    if (!related) {
      throw new Error(`Related topic not found for slug: ${relatedSlug}`);
    }

    return {
      topicId: topic.id,
      relatedTopicId: related.id,
      weight,
    };
  });

  console.log("Inserting related topics...");

  await tx
    .insert(relatedTopics)
    .values(values)
    .onConflictDoNothing({
      target: [relatedTopics.topicId, relatedTopics.relatedTopicId],
    });
  console.log(`Done. Prepared ${values.length} relationships.`);
};
