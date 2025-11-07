import type { RawTocItem } from "@/types/vfile";

export default function TableOfContent({ toc }: { toc: RawTocItem[] }) {
  return (
    <ul>
      {toc.map((item) => (
        <li key={item.value}>
          <a href={item.href}>{item.value}</a>
        </li>
      ))}
    </ul>
  );
}
