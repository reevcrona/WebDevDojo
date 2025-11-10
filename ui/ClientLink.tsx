"use client";
import { Hero } from "@/components/hero";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ClientLinkProps = {
  slug: string;
  children: React.ReactNode;
};

export default function ClientLink({ children, slug }: ClientLinkProps) {
  const pathName = usePathname();

  const segments = pathName.split("/").filter(Boolean);

  const topicsIndex = segments.indexOf("topics");

  const basePath = `/${segments.slice(0, topicsIndex + 2).join("/")}`;

  const href = `${basePath}/${slug}`;

  const isActive = pathName === href;

  return (
    <Link
      className={`${
        isActive
          ? "text-[#4a90e2] font-semibold border-b-2 border-[#4a90e2] py-2"
          : "text-gray-300"
      } hover:text-[#4a90e2]`}
      href={href}
    >
      {children}
    </Link>
  );
}
