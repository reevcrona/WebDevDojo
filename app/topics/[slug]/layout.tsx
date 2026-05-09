import TopicNav from "@/ui/overview-components/TopicNav";
import OverviewHeader from "@/ui/overview-header-components/OverviewHeader";
import { getTopicBySlug, getTopicPrerequisites } from "@/lib/query";
import { notFound } from "next/navigation";
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [topic, topicPrerequisites] = await Promise.all([
    getTopicBySlug(slug),
    getTopicPrerequisites(slug),
  ]);

  if (!topic) notFound();

  return (
    <section>
      <TopicNav />
      <OverviewHeader topic={topic} topicPrerequisites={topicPrerequisites} />
      {children}
    </section>
  );
}
