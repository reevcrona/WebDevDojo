import { getFilteredTopics } from "@/lib/query";
import TopicCard from "./TopicCard";

type TopicsGridProps = {
  query: string;
  selectedCategorySlugs: string[];
};

export default async function TopicsGrid({
  query,
  selectedCategorySlugs,
}: TopicsGridProps) {
  const topics = await getFilteredTopics(query, selectedCategorySlugs);
  console.log(topics);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {topics &&
        topics.map((topic) => {
          return (
            <TopicCard
              key={topic.id}
              data={{
                name: topic.name,
                summary: topic.summary,
                categoryName: topic.categoryName,
              }}
            />
          );
        })}
    </div>
  );
}
