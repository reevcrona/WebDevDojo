import { getTopicResourcesByTopicSlug } from "@/lib/query";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const resources = await getTopicResourcesByTopicSlug(slug);

  console.log(resources);

  return <h1>This is the learn page</h1>;
}
