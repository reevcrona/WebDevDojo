import SearchBar from "./Search";
import CategoryButton from "./CategoryButton";
import { getCategories } from "@/lib/query";

export default async function FilterPanel() {
  const categories = await getCategories();
  return (
    <div className="bg-white border-4 border-black shadow-hard p-6 md:p-10 relative">
      <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full"></div>
      <div className="absolute top-2 right-2 w-3 h-3 bg-black rounded-full"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 bg-black rounded-full"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 bg-black rounded-full"></div>
      <div className="flex flex-col gap-8">
        <h3 className="block text-4xl font-anton text-black uppercase leading-[0.9] mb-3">
          Development topics
        </h3>
        <div className="flex flex-wrap gap-4 items-center ">
          <span className="font-bold text-lg mr-2 uppercase font-mono">
            Filters
          </span>
          <ul className="flex gap-4 flex-wrap">
            {categories.map((cat) => {
              return (
                <li key={cat.id}>
                  <CategoryButton name={cat.name} slug={cat.slug} />
                </li>
              );
            })}
          </ul>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
