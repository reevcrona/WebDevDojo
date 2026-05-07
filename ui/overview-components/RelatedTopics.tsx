import { slugify } from "@/lib/slugify";
import TopicCard from "@/ui/topics-components/TopicCard";

type RelatedTopic = {
  id: string;
  name: string;
  summary: string | null;
  categoryName: string;
  slug: string;
};

export default function RelatedTopics({ topics }: { topics: RelatedTopic[] }) {
  if (topics.length === 0) return null;

  return (
    <div id={slugify("related topics")} className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold text-[#e5e7eb]">Related Topics</h3>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          data={{
            name: topic.name,
            summary: topic.summary ?? "",
            categoryName: topic.categoryName,
            slug: topic.slug,
          }}
        />
      ))}
    </div>
  );
}
