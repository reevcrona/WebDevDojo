import {
  pgTable,
  uuid,
  text,
  timestamp,
  pgEnum,
  integer,
} from "drizzle-orm/pg-core";
import { topics } from "./topics";

export const resourceFormat = pgEnum("resource_format", [
  "ARTICLE",
  "VIDEO",
  "DOC",
  "TUTORIAL",
  "COURSE",
  "BOOK",
  "CHEATSHEET",
  "TOOL",
  "REFERENCE",
]);

export const topicResources = pgTable("topic_resources", {
  id: uuid("id").defaultRandom().primaryKey(),
  topicId: uuid("topic_id")
    .notNull()
    .references(() => topics.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  url: text("url").notNull(),
  source: text("source").notNull(),
  format: resourceFormat("format").notNull(),
  summary: text("summary"),
  position: integer("position").default(1),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
