// src/lib/toc.ts
import { slugify } from "@/lib/slugify";
import type { TocItem } from "@/types/tocItem";

type Section = { title: string };

export function buildToc(
  sections: Section[] = [],
  options: { includeRelated?: boolean } = {},
): TocItem[] {
  const toc: TocItem[] = sections.map((s) => ({
    depth: 2,
    value: s.title,
    id: slugify(s.title),
  }));

  if (options.includeRelated) {
    toc.push({
      depth: 2,
      value: "Related Topics",
      id: slugify("related topics"),
    });
  }

  return toc;
}
