import type { PropsWithChildren } from "react";

export default function PrereqPill({ children }: PropsWithChildren) {
  return (
    <span className="px-2 py-0.5 bg-white text-black border border-white font-bold text-xs">
      {children}
    </span>
  );
}
