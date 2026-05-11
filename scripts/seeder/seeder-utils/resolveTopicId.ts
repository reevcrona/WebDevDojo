import { TopicsBySlugMap } from "./topicsBySlug";

export function resolveTopicId(
  topicsBySlug: TopicsBySlugMap,
  slug: string,
): string {
  const topic = topicsBySlug[slug];
  if (!topic) throw new Error(`Topic not found for slug: ${slug}`);
  return topic.id;
}
