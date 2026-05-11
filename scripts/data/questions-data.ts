export interface QuestionSeed {
  topic: string; // topic slug
  prompt: string;
  explanation?: string;
  options: Array<[string, boolean]>; // [label, isCorrect]
}

export const questionsSeedData: QuestionSeed[] = [
  {
    topic: "dom-manipulation",
    prompt: "Which method selects the first element matching a CSS selector?",
    explanation:
      "querySelector returns the first match; querySelectorAll returns all matches as a NodeList.",
    options: [
      ["document.querySelector()", true],
      ["document.querySelectorAll()", false],
      ["document.getElementById()", false],
      ["document.findElement()", false],
    ],
  },
  {
    topic: "dom-manipulation",
    prompt: "What does document.querySelector return when no element matches?",
    explanation: "It returns null, not undefined.",
    options: [
      ["null", true],
      ["undefined", false],
      ["An empty NodeList", false],
      ["Throws an error", false],
    ],
  },
  {
    topic: "state-management",
    prompt: "Which hook is best suited for simple local UI state?",
    options: [
      ["useState", true],
      ["useReducer", false],
      ["useContext", false],
      ["useMemo", false],
    ],
  },
];
