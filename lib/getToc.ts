import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFlexibleToc from "remark-flexible-toc";
import { VFile } from "vfile";

export async function getToc(markdown: string) {
  const processor = unified().use(remarkParse).use(remarkFlexibleToc);

  const file = new VFile({ value: markdown });
  const tree = processor.parse(markdown);

  await processor.run(tree, file);

  return file.data?.toc ?? [];
}
