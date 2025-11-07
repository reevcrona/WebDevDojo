import Link from "next/link";
export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Link className="text-3xl text-white" href="/topics">
        Categories
      </Link>
    </main>
  );
}
