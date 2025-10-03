import { getCategories } from "@/lib/query";

import FilterPanel from "@/ui/FilterPanel";
export default async function Page() {
  const data = await getCategories();
  console.log(data);
  return (
    <main className="flex justify-center min-h-screen p-12">
      <div className="max-w-7xl  w-full">
        <h1 className="text-5xl font-bold">Development Topics</h1>
        <p>Browse and discover learning resources</p>
        <FilterPanel categories={data} />
      </div>
    </main>
  );
}
