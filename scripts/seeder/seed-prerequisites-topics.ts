import { topicPrerequisites } from "@/drizzle/schema";
import type { Transaction } from "@/types/db-types";
import { getTopicsBySlugMap } from "./seeder-utils/topicsBySlug";
import { prerequisiteSeedData } from "../data/prerequisite-topics-data";

export async function runPrerequisitesSeed(tx: Transaction) {
  const topicsBySlug = await getTopicsBySlugMap(tx);

  const values = prerequisiteSeedData.map(
    ([topicSlug, prerequisiteSlug, weight]) => {
      const topic = topicsBySlug[topicSlug];
      const prerequisiteTopic = topicsBySlug[prerequisiteSlug];

      if (!topic) {
        throw new Error(`Topic not found for slug: ${topicSlug}`);
      }
      if (!prerequisiteTopic) {
        throw new Error(
          `Related topic not found for slug: ${prerequisiteSlug}`
        );
      }

      return {
        topicId: topic.id,
        prerequisiteId: prerequisiteTopic.id,
        weight,
      };
    }
  );

  console.log("Inserting related topics...");

  await tx
    .insert(topicPrerequisites)
    .values(values)
    .onConflictDoNothing({
      target: [topicPrerequisites.topicId, topicPrerequisites.prerequisiteId],
    });
  console.log(`Done. Prepared ${values.length} relationships.`);
}
