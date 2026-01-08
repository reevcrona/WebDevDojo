// mdx-components.tsx (at your project root)
import type { MDXComponents } from "mdx/types";
import LearnSection from "@/ui/overview-components/LearnSection";

// 1. Define the global type for the Editor
declare global {
  type MDXProvidedComponents = {
    LearnSection: typeof LearnSection;
  };
}

// 2. Export the function for the Runtime
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    LearnSection,
  };
}
