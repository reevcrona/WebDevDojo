import { SubCategory } from "@/types/constants";
import { Environment } from "@/drizzle/schema";
import { getRawMdx } from "@/utils/mdx-loader";
interface TopicDataSeed {
  mdx: string;
}

interface TopicsSeed {
  name: string;
  slug: string;
  summary: string;
  environment?: Environment;
  subcategories?: SubCategory;
  topicsData?: TopicDataSeed;
}

interface CategorySeed {
  category: {
    name: string;
    slug: string;
  };
  topics: TopicsSeed[];
}

export const SEED_DATA: Record<string, CategorySeed> = {
  javascript: {
    category: {
      name: "Javascript",
      slug: "javascript",
    },
    topics: [
      {
        name: "DOM Manipulation",
        slug: "dom-manipulation",
        summary: "Update the UI by querying and changing nodes.",
        environment: "CLIENT SIDE",
        subcategories: "WEB APIS",
        topicsData: {
          mdx: getRawMdx("javascript/dom-manipulation.mdx"),
        },
      },
      {
        name: "Event Handling",
        slug: "event-handling",
        summary: "Interactivity patterns with events & listeners.",
      },
    ],
  },
  typescript: {
    category: {
      name: "Typescript",
      slug: "typescript",
    },
    topics: [
      {
        name: "Type Inference",
        slug: "type-inference",
        summary: "How TS infers types to reduce manual annotations.",
      },
      {
        name: "Generics",
        slug: "generics",
        summary: "Build reusable, type-safe APIs with generics.",
      },
    ],
  },
  react: {
    category: {
      name: "React",
      slug: "react",
    },
    topics: [
      {
        name: "State Management",
        slug: "state-management",
        summary: "useState basics and patterns for local state.",
        environment: "CLIENT SIDE",
        subcategories: "STATE MANAGEMENT",
        topicsData: {
          mdx: '---\nsections:\n  - title: "What & Why"\n  - title: "Mental Model"\n  - title: "When to Use"\n  - title: "Pitfalls"\n---\n<LearnSection title="What & Why">\n  State management in React is about keeping track of data that changes over time and making sure the UI always reflects the latest state. \n  Instead of manually updating the DOM, you let React re-render when state changes via hooks like <code>useState</code> and <code>useReducer</code>. \n  Good state management keeps your UI <strong>predictable</strong>, <strong>testable</strong>, and <strong>easier to reason about</strong> as your app grows.\n</LearnSection>\n\n<LearnSection title="Mental Model">\n  Think of state as the "source of truth" for a piece of UI. The JSX you return is like a <strong>pure view</strong> of that state at a given moment in time. \n  When state changes, React runs your component again and recalculates the UI. You don’t push changes into the DOM—instead, you <em>update the state</em>, and React takes care of syncing the view. \n  Local state lives close to where it’s used, and shared state is lifted up to a common parent so multiple components can read or update it.\n</LearnSection>\n\n<LearnSection title="When to Use">\n  <ul>\n    <li>Use <code>useState</code> for simple, local UI state like inputs, toggles, and modals.</li>\n    <li>Use <code>useReducer</code> when state updates are more complex or follow clear events (e.g. <code>"ADD_TODO"</code>, <code>"RESET"</code>).</li>\n    <li>Lift state up to a parent when multiple children need to read or update the same data.</li>\n    <li>Use context or a state library (like Redux, Zustand, or React Query) when state is shared across many distant components.</li>\n  </ul>\n</LearnSection>\n\n<LearnSection title="Pitfalls">\n  <ul>\n    <li>Storing <strong>too much</strong> in state (e.g. values you can derive from existing state or props) makes code harder to maintain.</li>\n    <li>Updating state in the wrong place instead of lifting it up can lead to duplicated or out-of-sync data.</li>\n    <li>Mutating state directly (e.g. <code>array.push()</code> on state) breaks React\'s change detection—always create new arrays/objects.</li>\n    <li>Overusing global state or context for everything can hurt performance and make components tightly coupled.</li>\n  </ul>\n</LearnSection>',
        },
      },
      {
        name: "Lifecycle & Effects",
        slug: "lifecycle-effects",
        summary: "Rendering, effects, and cleanup with useEffect.",
      },
    ],
  },
  networking: {
    category: {
      name: "Network",
      slug: "network",
    },
    topics: [
      {
        name: "OSI Model",
        slug: "osi-model",
        summary: "The 7-layer model and how data flows.",
      },
      {
        name: "TCP/IP Basics",
        slug: "tcp-ip-basics",
        summary: "Core protocols and how the internet works.",
      },
    ],
  },
};
