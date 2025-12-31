"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import type { Route } from "next";
import clsx from "clsx";
type CategoryButtonProps = {
  name: string;
  slug: string;
};

export default function CategoryButton({ name, slug }: CategoryButtonProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selected = new Set(
    (searchParams.get("categories") ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  );

  const active = selected.has(slug);

  const toggle = () => {
    const next = new Set(selected);
    if (active) {
      next.delete(slug);
    } else {
      next.add(slug);
    }

    const params = new URLSearchParams(searchParams);

    const csv = [...next].sort().join(",");

    if (csv) params.set("categories", csv);
    else params.delete("categories");

    const url = `${pathname}?${params.toString()}` as Route;
    replace(url);
  };

  const buttonStyling = clsx(
    "border-2 border-black px-6 py-2 font-bold uppercase tracking-wider text-sm transition-all",

    !active && [
      "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "hover:bg-black hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
    ],

    active && [
      "bg-black text-white translate-x-1 translate-y-1 shadow-none",
      "hover:border-primary hover:text-primary transition-colors",
    ]
  );

  return (
    <button onClick={toggle} className={buttonStyling}>
      {name}
    </button>
  );
}
