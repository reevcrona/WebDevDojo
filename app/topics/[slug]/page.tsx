import { getTopicBySlug } from "@/lib/query";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topic = await getTopicBySlug(slug);
  console.log(topic);
  return (
    <>
      <h1>{topic?.name}</h1>
      <p>{topic?.summary}</p>
    </>
  );
}
