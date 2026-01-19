import type { PropsWithChildren } from "react";

export default function InfoBlockInlineCode({ children }: PropsWithChildren) {
  return (
    <code className="bg-gray-100 px-1 border border-black/20 font-bold">
      {children}
    </code>
  );
}
