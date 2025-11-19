import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-800  flex justify-center">
      <ul className="flex gap-10 py-4 px-3 text-white text-xl">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/topics"}>Topics</Link>
        </li>
        <li>
          <Link href={"/"}>Learn</Link>
        </li>
      </ul>
    </nav>
  );
}
