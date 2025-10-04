import { type InferSelectModel } from "drizzle-orm";
import { categories } from "@/drizzle/schema";

export type Category = InferSelectModel<typeof categories>;
