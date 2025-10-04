import { getTopics } from "@/lib/query";
import TopicCard from "./TopicCard";
export default async function TopicsGrid() {
  const topics = await getTopics();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {topics.map((topic) => {
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
