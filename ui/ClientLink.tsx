"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { set } from "zod";

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

  return <Link href={href}>{children}</Link>;
}
