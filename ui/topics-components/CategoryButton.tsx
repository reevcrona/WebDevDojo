"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
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

    replace(`${pathname}?${params.toString()}`);
  };

  const buttonStyling = clsx(
    "relative inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition",
    "bg-slate-700 text-slate-300 hover:bg-slate-600",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800",
    "relative pl-5 cursor-pointer",

    active &&
      "text-sky-200 border-transparent ring-4 ring-sky-500/20 shadow-[0_0_0_2px_rgba(56,189,248,.55)]"
  );

  return (
    <button onClick={toggle} className={buttonStyling}>
      {name}
    </button>
  );
}
