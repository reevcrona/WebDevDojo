import { type InferSelectModel } from "drizzle-orm";
import { categories, topics } from "@/drizzle/schema";
import { type Environment } from "@/drizzle/schema";
import { type SubCategory } from "./constants";
export type Category = InferSelectModel<typeof categories>;
export type Topic = InferSelectModel<typeof topics>;

export type TopicMetadata = {
  id: string;
  name: string;
  summary: string | null;
  environment: Environment | null;
  subcategories: SubCategory | null;
  updatedAt: Date;
};

export type TopicPrerequisiteMetadata = {
  name: string;
  slug: string;
}[];
