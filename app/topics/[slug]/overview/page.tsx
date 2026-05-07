import { notFound } from "next/navigation";
import {
  getTopicOverviewBySlug,
  getRelatedTopics,
  getTopicPrerequisites,
} from "@/lib/query";
import { renderOverviewMDX } from "@/lib/mdx";
import { buildToc } from "@/lib/toc";
import OverviewHeader from "@/ui/overview-header-components/OverviewHeader";
import TableOfContent from "@/ui/overview-components/TableOfContent";
import QuickActions from "@/ui/overview-components/QuickActions";
import RelatedTopics from "@/ui/overview-components/RelatedTopics";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [topicOverview, relatedTopics, topicPrerequisites] = await Promise.all([
    getTopicOverviewBySlug(slug),
    getRelatedTopics(slug),
    getTopicPrerequisites(slug),
  ]);

  if (!topicOverview?.topic) {
    return notFound();
  }

  const { content, frontmatter } = await renderOverviewMDX(
    topicOverview.mdx ?? "",
  );

  const toc = buildToc(frontmatter.sections, {
    includeRelated: relatedTopics.length > 0,
  });

  return (
    <div className="flex flex-col gap-6">
      <OverviewHeader
        topic={topicOverview.topic}
        topicPrerequisites={topicPrerequisites}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <main className="lg:col-span-2 flex flex-col gap-12">
          {content}
          <RelatedTopics topics={relatedTopics} />
        </main>
        <aside className="flex flex-col gap-10">
          <TableOfContent toc={toc} />
          <QuickActions />
        </aside>
      </div>
    </div>
  );
}
