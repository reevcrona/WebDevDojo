import {
  getTopicOverviewBySlug,
  getRelatedTopics,
  getTopicPrerequisites,
} from "@/lib/query";
import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
import TableOfContent from "@/ui/overview-components/TableOfContent";
import LearnSection from "@/ui/overview-components/LearnSection";
import Summary from "@/ui/mdx-components/Summary";
import InfoBlock from "@/ui/mdx-components/InfoBlock";
import { slugify } from "@/lib/slugify";
import type { TocItem } from "@/types/tocItem";
import OverviewHeader from "@/ui/overview-header-components/OverviewHeader";
import QuickActions from "@/ui/overview-components/QuickActions";
import TopicCard from "@/ui/topics-components/TopicCard";
import { notFound } from "next/navigation";
import InfoBlockInlineCode from "@/ui/mdx-components/Infoblock-components/InfoBlockInlineCode";
import InfoBlockListItem from "@/ui/mdx-components/Infoblock-components/InfoBlockListItem";
import InfoBlockListContainer from "@/ui/mdx-components/Infoblock-components/InfoBlockListContainer";
import InfoBlockHeader from "@/ui/mdx-components/Infoblock-components/InfoBlockHeader";
import InfoBlockText from "@/ui/mdx-components/Infoblock-components/InfoBlockText";
type Scope = {
  toc?: TocItem[];
};
type FrontMatter = {
  sections: {
    title: string;
  }[];
};
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

  if (!topicOverview || !topicOverview.topic) {
    return notFound();
  }

  const markdown = topicOverview?.mdx || "";

  const options: EvaluateOptions<Scope> = {
    parseFrontmatter: true,
  };

  const { content, frontmatter } = await evaluate<FrontMatter, Scope>({
    source: markdown,
    options,
    components: {
      LearnSection,
      Summary,
      InfoBlock,
      InfoBlockInlineCode,
      InfoBlockListItem,
      InfoBlockListContainer,
      InfoBlockHeader,
      InfoBlockText,
    },
  });

  const toc: TocItem[] = (frontmatter.sections ?? []).map((s) => ({
    depth: 2,
    value: s.title,
    id: slugify(s.title),
  }));

  if (relatedTopics.length > 0) {
    toc.push({
      depth: 2,
      value: "Related Topics",
      id: slugify("related topics"),
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <OverviewHeader
        topic={topicOverview?.topic}
        topicPrerequisites={topicPrerequisites}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <main className="lg:col-span-2 flex flex-col gap-12">
          {content}
          {relatedTopics.length > 0 && (
            <div id="related-topics" className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-[#e5e7eb]">
                Related Topics
              </h3>
              {relatedTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  data={{
                    name: topic.name,
                    summary: topic.summary,
                    categoryName: topic.categoryName,
                    slug: topic.slug,
                  }}
                />
              ))}
            </div>
          )}
        </main>
        <aside className="flex flex-col gap-10">
          <TableOfContent toc={toc} />
          <QuickActions />
        </aside>
      </div>
    </div>
  );
}
