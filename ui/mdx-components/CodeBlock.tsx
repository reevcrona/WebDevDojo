import type { ComponentPropsWithoutRef } from "react";

type PreProps = ComponentPropsWithoutRef<"pre"> & {
  "data-language"?: string;
  "data-theme"?: string;
};

export function Pre({ children, ...props }: PreProps) {
  const language = props["data-language"];

  return (
    <div className="relative my-4">
      {language && (
        <span
          className="
            absolute top-0 right-0
            font-mono text-xs uppercase
            text-primary
            bg-background-dark
            border-2 border-black border-t-0 border-r-0
            px-2 py-1
            z-10
          "
        >
          {language}
        </span>
      )}
      <pre
        {...props}
        className="
          bg-background-dark text-background-light
          border-2 border-black
          shadow-hard-sm
          p-4
          font-mono text-sm leading-relaxed
          overflow-x-auto
        "
      >
        {children}
      </pre>
    </div>
  );
}
