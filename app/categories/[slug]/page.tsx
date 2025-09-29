import { getTopicsByCategorySlug } from "@/lib/query";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topics = await getTopicsByCategorySlug(slug);

  return (
    <>
      <ul>
        {topics.map((topic) => {
          return <li key={topic.id}>{topic.name}</li>;
        })}
      </ul>
    </>
  );
}
