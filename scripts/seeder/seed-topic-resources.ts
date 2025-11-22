import { topicResources } from "@/drizzle/schema";
import { getTopicsBySlugMap } from "./seeder-utils/topicsBySlug";
import { topicResourcesData } from "../data/topic-resources-data";
import type { Transaction } from "@/types/db-types";
import type { InferInsertModel } from "drizzle-orm";

type TopicResourceInsert = InferInsertModel<typeof topicResources>;

export async function runTopicResourceSeed(tx: Transaction) {
  console.log("Loading topics...");
  const topicsBySlug = await getTopicsBySlugMap(tx);

  const values: TopicResourceInsert[] = topicResourcesData.map(
    ({ format, source, title, topicSlug, url, position, summary }) => {
      const topic = topicsBySlug[topicSlug];

      if (!topic) {
        throw new Error(`Topic not found for slug: ${topicSlug}`);
      }

      return {
        topicId: topic.id,
        format,
        source,
        title,
        url,
        position,
        summary,
      };
    }
  );

  await tx
    .insert(topicResources)
    .values(values)
    .onConflictDoNothing({
      target: [topicResources.topicId, topicResources.url],
    });
}
