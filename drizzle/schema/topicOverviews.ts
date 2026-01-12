import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { topics } from "./topics";

export const topicOverviews = pgTable("topic_overviews", {
  id: uuid("overview_id").defaultRandom().primaryKey(),

  topicId: uuid("topic_id")
    .notNull()
    .unique()
    .references(() => topics.id, { onDelete: "cascade" }),

  mdx: text("mdx").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
