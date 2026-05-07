import type { PropsWithChildren } from "react";

export default function InfoBlockListItem({ children }: PropsWithChildren) {
  return (
    <li className="flex items-start gap-3 mb-4">
      <span
        className="
          text-primary font-black text-xl leading-tight
          shrink-0
        "
        aria-hidden="true"
      >
        {">"}
      </span>
      <span className="flex-1">{children}</span>
    </li>
  );
}
