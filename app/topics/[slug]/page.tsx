import { getTopicsByCategorySlug } from "@/lib/query";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topics = await getTopicsByCategorySlug(slug);
  console.log(topics);
  return (
    <>
      <ul className="flex justify-evenly w-full mt-10">
        {topics.map((topic) => {
          return (
            <li key={topic.id} className="flex flex-col gap-2">
              <Link href={`/categories/${slug}/${topic.slug}`}>
                <h2>{topic.name}</h2>
                <p className="text-xs">{topic.summary}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
