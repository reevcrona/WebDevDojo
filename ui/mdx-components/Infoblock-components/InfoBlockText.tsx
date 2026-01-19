import type { PropsWithChildren } from "react";

export default function InfoBlockText({ children }: PropsWithChildren) {
  return <div className="mb-6 font-medium leading-relaxed">{children}</div>;
}
