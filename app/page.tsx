import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-black">Home</h1>
      <Link href={"/categories"}>Categories</Link>
    </div>
  );
}
