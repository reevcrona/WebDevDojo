import { getCategories } from "@/lib/query";
import Image from "next/image";
export default async function Home() {
  const data = await getCategories();
  console.log(data);
  return (
    <main className="min-h-screen flex flex-col items-center">
      <ul className="flex gap-20 mt-10">
        {data.map((d) => {
          return (
            <li key={d.id}>
              <Image
                src={d.imageUrl}
                alt={d.imageAlt}
                width={d.imageMeta.width}
                height={d.imageMeta.height}
                className="w-60 h-60 rounded-xl"
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
