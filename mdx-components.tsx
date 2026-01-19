// mdx-components.tsx (at your project root)
import type { MDXComponents } from "mdx/types";
import LearnSection from "@/ui/overview-components/LearnSection";
import Summary from "@/ui/mdx-components/Summary";
import InfoBlock from "@/ui/mdx-components/InfoBlock";
import InfoBlockInlineCode from "@/ui/mdx-components/Infoblock-components/InfoBlockInlineCode";
import InfoBlockListItem from "@/ui/mdx-components/Infoblock-components/InfoBlockListItem";
import InfoBlockListContainer from "@/ui/mdx-components/Infoblock-components/InfoBlockListContainer";
import InfoBlockHeader from "@/ui/mdx-components/Infoblock-components/InfoBlockHeader";
import InfoBlockText from "@/ui/mdx-components/Infoblock-components/InfoBlockText";
// 1. Define the global type for the Editor
declare global {
  type MDXProvidedComponents = {
    LearnSection: typeof LearnSection;
    Summary: typeof Summary;
    InfoBlock: typeof InfoBlock;
    InfoBlockInlineCode: typeof InfoBlockInlineCode;
    InfoBlockListItem: typeof InfoBlockListItem;
    InfoBlockListContainer: typeof InfoBlockListContainer;
    InfoBlockHeader: typeof InfoBlockHeader;
    InfoBlockText: typeof InfoBlockText;
  };
}

// 2. Export the function for the Runtime
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    LearnSection,
    Summary,
    InfoBlock,
    InfoBlockInlineCode,
    InfoBlockListItem,
    InfoBlockListContainer,
    InfoBlockHeader,
    InfoBlockText,
  };
}
