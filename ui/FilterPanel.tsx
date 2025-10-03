import Search from "./Search";
import CategoryButton from "./categoryButton";
import type { Category } from "@/types/data-types";

type FilterPanelProps = {
  categories: Category[];
};

export default function FilterPanel({ categories }: FilterPanelProps) {
  return (
    <div className="bg-black">
      <ul className="flex gap-4">
        {categories.map((cat) => {
          return (
            <li key={cat.id}>
              <CategoryButton name={cat.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
