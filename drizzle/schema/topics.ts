import { pgTable, uuid, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { categories } from "./categories";
import { SUB_CATEGORIES, ENVIRONMENTS } from "@/types/constants";

export const environmentEnum = pgEnum("environment", ENVIRONMENTS);
export const subcategoriesEnum = pgEnum("subcategory_enum", SUB_CATEGORIES);

export type Environment = (typeof environmentEnum.enumValues)[number];

export const topics = pgTable("topics", {
  id: uuid("topic_id").defaultRandom().primaryKey(),

  categoryId: uuid("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),

  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),

  summary: text("summary"),

  environment: environmentEnum("environment").default("CLIENT SIDE"),

  subcategories: subcategoriesEnum("subcategory").default("NONE"),

  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
