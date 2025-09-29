import { InferSelectModel } from "drizzle-orm";
import { categories } from "@/drizzle/schema/categories";

export type Category = InferSelectModel<typeof categories>;
