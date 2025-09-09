import Image from "next/image";
import { createUser } from "../lib/actions";
export default async function Home() {
  return (
    <form action={createUser}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="name" />
      <label htmlFor="age">Age</label>
      <input type="text" name="age" id="age" placeholder="age" />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" placeholder="email" />
      <button type="submit">Submit</button>
    </form>
  );
}
