import type { PropsWithChildren } from "react";

export default function InfoBlockListItem({ children }: PropsWithChildren) {
  return (
    <li
      className="relative pl-8 mb-4 
      flex items-start 
      /* The Arrow */
      before:content-['>'] 
      before:absolute 
      before:left-0 
      /* Centering Logic: Top 0 plus a calculated nudge for line-height */
      before:top-[2px] 
      before:text-[#e11d48] 
      before:font-black 
      before:text-xl 
      before:leading-none"
    >
      {children}
    </li>
  );
}
