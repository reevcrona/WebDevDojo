import type { TocItem } from "@/types/tocItem";

type TableOfContentProps = { toc: TocItem[] | undefined };

export default function TableOfContent({ toc }: TableOfContentProps) {
  return (
    <div className="p-4 rounded-lg bg-[#20293a]">
      <h4 className="font-semibold mb-3 text-[#e5e7eb]">On this page</h4>
      <ul className="space-y-2 text-sm">
        {toc &&
          toc.map((item) => (
            <li key={item.value}>
              <a
                className="text-[#9da6b9] hover:underline hover:text-[#4a90e2]"
                href={`#${item.id}`}
              >
                {item.value}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
