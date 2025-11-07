import { getTopicOverviewBySlug } from "@/lib/query";
import { MDXRemote, type MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import TableOfContent from "@/ui/overview-components/TableOfContent";
import rehypeSlug from "rehype-slug";
import { getToc } from "@/lib/getToc";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topicOverview = await getTopicOverviewBySlug(slug);
  const markdown = topicOverview?.mdx;

  const toc = await getToc(markdown || "");

  console.log(toc);

  const options: MDXRemoteOptions = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  };

  return (
    <>
      <MDXRemote
        source={markdown || ""}
        options={options}
        components={{
          h1: (props) => (
            <h1 className="text-2xl text-white font-semibold" {...props} />
          ),
        }}
      />
      <aside>
        <TableOfContent toc={toc} />
      </aside>
    </>
  );
}
