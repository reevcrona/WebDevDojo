import Image from "next/image";

import { getCategories } from "@/lib/query";
export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col items-center">
      <ul className="flex gap-6 mt-10">
        {categories.map((cat) => (
          <li className="max-w-[150px]" key={cat.id}>
            <Image
              src={cat.imageUrl}
              alt="Category logo"
              width={cat.imageMeta.width}
              height={cat.imageMeta.height}
              className="rounded-2xl"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
