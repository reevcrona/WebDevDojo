import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import { mdxComponents } from "@/ui/mdx-components";
import type { TocItem } from "@/types/tocItem";

type FrontMatter = {
  sections: {
    title: string;
  }[];
};

type Scope = {
  toc?: TocItem[];
};

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark-default",
  keepBackground: false,
};

export async function renderOverviewMDX(source: string) {
  const options: EvaluateOptions<Scope> = {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    },
  };

  return evaluate<FrontMatter>({
    source,
    options,
    components: mdxComponents,
  });
}
