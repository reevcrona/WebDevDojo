export const SUB_CATEGORIES = [
  "WEB APIS",
  "DOM MANIPULATION",
  "EVENT LOGIC",
  "STATE MANAGEMENT",
  "SQL OPERATIONS",
] as const;

export type SubCategory = (typeof SUB_CATEGORIES)[number];

export const ENVIRONMENTS = [
  "CLIENT SIDE",
  "SERVER SIDE",
  "DESIGN SYSTEM",
  "FULL STACK",
] as const;
