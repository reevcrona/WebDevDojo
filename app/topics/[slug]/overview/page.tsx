import { getTopicOverviewBySlug } from "@/lib/query";
import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
import TableOfContent from "@/ui/overview-components/TableOfContent";
import LearnSection from "@/ui/overview-components/LearnSection";
import { slugify } from "@/lib/slugify";
import type { TocItem } from "@/types/tocItem";
import OverviewHeader from "@/ui/overview-components/OverviewHeader";
import QuickActions from "@/ui/overview-components/QuickActions";
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

  const topicOverview = await getTopicOverviewBySlug(slug);

  const markdown = topicOverview?.mdx || "";

  const options: EvaluateOptions<Scope> = {
    parseFrontmatter: true,
  };

  const { content, frontmatter } = await evaluate<FrontMatter, Scope>({
    source: markdown,
    options,
    components: { LearnSection },
  });

  const toc: TocItem[] = (frontmatter.sections ?? []).map((s) => ({
    depth: 2,
    value: s.title,
    id: slugify(s.title),
  }));

  return (
    <div className="flex flex-col gap-6">
      <OverviewHeader
        header={topicOverview?.topic.name}
        summary={topicOverview?.topic.summary}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <main className="lg:col-span-2 flex flex-col gap-12">{content}</main>
        <aside className="flex flex-col gap-10">
          <TableOfContent toc={toc} />
          <QuickActions />
        </aside>
      </div>
    </div>
  );
}
