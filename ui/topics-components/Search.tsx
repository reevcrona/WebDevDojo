"use client";
import { CornerDownLeft } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import type { Route } from "next";
export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    const url = `${pathname}?${params.toString()}` as Route;
    replace(url);
  }, 300);

  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <CornerDownLeft
          size={28}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
        />
        <input
          className="w-full bg-white border-[6px] border-black p-6 text-2xl font-anton uppercase placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-0 transition-colors"
          type="search"
          id="search"
          placeholder="Search topics..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
}
