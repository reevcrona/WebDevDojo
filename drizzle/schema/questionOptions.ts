import { pgTable, uuid, text, integer, boolean } from "drizzle-orm/pg-core";
import { questions } from "./questions";

export const questionOptions = pgTable("question_options", {
  id: uuid("option_id").defaultRandom().primaryKey(),
  questionId: uuid("question_id")
    .notNull()
    .references(() => questions.id, { onDelete: "cascade" }),
  label: text("label").notNull(),
  isCorrect: boolean("is_correct").notNull().default(false),
  position: integer("position").notNull(),
});
