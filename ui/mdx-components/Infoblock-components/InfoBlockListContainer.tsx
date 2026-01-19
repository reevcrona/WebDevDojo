import type { PropsWithChildren } from "react";

export default function InfoBlockListContainer({
  children,
}: PropsWithChildren) {
  return <ul className="space-y-3 font-mono text-sm">{children}</ul>;
}
