import Image from "next/image";
import { createUser } from "../lib/actions";
import { getCategories } from "@/lib/query";
export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col items-center">
      <form action={createUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="name" />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" placeholder="age" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="email" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Image src={cat.imageUrl} alt="Category logo" />
          </li>
        ))}
      </ul>
    </div>
  );
}
