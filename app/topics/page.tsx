import { getCategories } from "@/lib/query";
import CategoryButton from "@/ui/categoryButton";

export default async function Page() {
  const data = await getCategories();
  console.log(data);
  return (
    <ul className="flex gap-20 mt-10">
      {data.map((d) => {
        return (
          <li className="text-red-600" key={d.id}>
            <CategoryButton name={d.name} />
          </li>
        );
      })}
    </ul>
  );
}
