import { type PropsWithChildren } from "react";

export default function Summary({ children }: PropsWithChildren) {
  return (
    <div className="flex-1">
      <section className="pl-8 border-l-8 border-primary py-2 font-mono">
        <h3 className="text-2xl font-bold mb-4 uppercase">Summary</h3>
        <div className="text-lg md:text-xl font-medium leading-relaxed  text-black/80 max-w-3xl">
          {children}
        </div>
      </section>
    </div>
  );
}
