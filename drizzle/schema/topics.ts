import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { categories } from "./categories";

export const topics = pgTable("topics", {
  id: uuid("topic_id").defaultRandom().primaryKey(),

  categoryId: uuid("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),

  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),

  summary: text("summary"),

  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
