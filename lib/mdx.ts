import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
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

export async function renderOverviewMDX(source: string) {
  const options: EvaluateOptions<Scope> = {
    parseFrontmatter: true,
  };

  return evaluate<FrontMatter>({
    source,
    options,
    components: mdxComponents,
  });
}
