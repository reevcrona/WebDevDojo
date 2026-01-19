import type { PropsWithChildren } from "react";

export default function InfoBlock({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 bg-white border-4 border-black p-8 shadow-hard">
      {children}
    </div>
  );
}
