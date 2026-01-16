import { pgTable, uuid, primaryKey, integer } from "drizzle-orm/pg-core";
import { topics } from "@/drizzle/schema/topics";

export const topicPrerequisites = pgTable(
  "topic_prerequisites",
  {
    topicId: uuid("topic_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
    prerequisiteId: uuid("prerequisite_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
    weight: integer().notNull(),
  },
  (t) => [
    primaryKey({
      name: "topic_prerequisites_pk",
      columns: [t.topicId, t.prerequisiteId],
    }),
  ]
);
