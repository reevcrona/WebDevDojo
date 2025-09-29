import { getCategories } from "@/lib/query";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const data = await getCategories();
  console.log(data);
  return (
    <ul className="flex gap-20 mt-10">
      {data.map((d) => {
        return (
          <li key={d.id}>
            <Link href={`/categories/${d.slug}`}>
              <Image
                src={d.imageUrl}
                alt={d.imageAlt}
                width={d.imageMeta.width}
                height={d.imageMeta.height}
                className="w-60 h-60 rounded-xl"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
