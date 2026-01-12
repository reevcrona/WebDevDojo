/* eslint-disable react/jsx-no-comment-textnodes */
import type { PropsWithChildren } from "react";

export default function PrereqContainer({ children }: PropsWithChildren) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <span className="text-white/60 font-bold text-xs">// PREREQUISITES</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
