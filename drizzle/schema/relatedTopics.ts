import {
  pgTable,
  uuid,
  timestamp,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";
import { topics } from "./topics";

export const relatedTopics = pgTable(
  "related_topics",
  {
    topicId: uuid("topic_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
    relatedTopicId: uuid("related_topic_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
    weight: integer().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => [
    primaryKey({
      name: "topic_related_pk",
      columns: [t.topicId, t.relatedTopicId],
    }),
  ]
);
