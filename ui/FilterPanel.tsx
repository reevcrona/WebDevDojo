import SearchBar from "./Search";
import CategoryButton from "./CategoryButton";
import type { Category } from "@/types/data-types";

type FilterPanelProps = {
  categories: Category[];
};

export default function FilterPanel({ categories }: FilterPanelProps) {
  return (
    <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700/50 p-6 mb-8">
      <div className="mb-6">
        <h3 className="block text-sm font-medium text-slate-300 mb-3">
          Category
        </h3>
        <ul className="flex gap-4 flex-wrap">
          {categories.map((cat) => {
            return (
              <li key={cat.id}>
                <CategoryButton name={cat.name} />
              </li>
            );
          })}
        </ul>
      </div>
      <SearchBar />
    </div>
  );
}
