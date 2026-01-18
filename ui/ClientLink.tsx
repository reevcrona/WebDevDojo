"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

type ClientLinkProps = {
  slug: string;
  children: React.ReactNode;
};

export default function ClientLink({ children, slug }: ClientLinkProps) {
  const pathName = usePathname();

  const segments = pathName.split("/").filter(Boolean);

  const topicsIndex = segments.indexOf("topics");

  const basePath = `/${segments.slice(0, topicsIndex + 2).join("/")}`;

  const href = `${basePath}/${slug}` as Route;

  const isActive = pathName === href;

  return (
    <Link
      className={`${
        isActive
          ? "h-12 px-8 flex items-center justify-center bg-black text-white border-4 border-black border-b-0 font-bold tracking-wider hover:bg-black/90"
          : "h-10 px-6 flex items-center justify-center translate-y-1.5 bg-white text-black border-4 border-black border-b-0 font-bold tracking-wider hover:bg-primary hover:text-white transition-colors"
      } `}
      href={href}
    >
      {children}
    </Link>
  );
}
