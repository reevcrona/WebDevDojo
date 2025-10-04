"use client";
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
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
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-slate-300 mb-3"
      >
        Search
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          className="w-full px-4 py-2.5 pl-10 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all bg-slate-900 text-white placeholder:text-slate-500"
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
