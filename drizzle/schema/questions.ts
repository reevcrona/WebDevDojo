import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";
import { topics } from "./topics";

export const questions = pgTable("questions", {
  id: uuid("question_id").defaultRandom().primaryKey(),
  topicId: uuid("topic_id")
    .notNull()
    .references(() => topics.id, { onDelete: "cascade" }),

  prompt: text("prompt").notNull(),

  explanation: text("explanation"),

  position: integer("position").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
