import { getTopicOverviewBySlug } from "@/lib/query";
import { MDXRemote } from "next-mdx-remote-client/rsc";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topicOverview = await getTopicOverviewBySlug(slug);
  const markdown = topicOverview?.mdx;
  console.log(topicOverview);
  return <MDXRemote source={markdown || ""} components={{}} />;
}
