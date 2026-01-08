import {
  pgTable,
  uuid,
  text,
  timestamp,
  pgEnum,
  check,
} from "drizzle-orm/pg-core";
import { topics } from "./topics";
import { SubCategory, SUB_CATEGORIES } from "@/types/constants";
import { sql } from "drizzle-orm";

export const environmentEnum = pgEnum("environment", [
  "CLIENT SIDE",
  "SERVER SIDE",
  "DESIGN SYSTEM",
  "FULL STACK",
]);

export const topicOverviews = pgTable(
  "topic_overviews",
  {
    id: uuid("overview_id").defaultRandom().primaryKey(),

    topicId: uuid("topic_id")
      .notNull()
      .unique()
      .references(() => topics.id, { onDelete: "cascade" }),

    mdx: text("mdx").notNull(),

    environment: environmentEnum("environment").notNull(),

    subcategories: text("subcategories").$type<SubCategory>().notNull(),

    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => {
    return {
      subCategoryCheck: check(
        "subcategory_check",
        sql`${t.subcategories} IN (${sql.join(
          SUB_CATEGORIES.map((s) => sql`'${sql.raw(s)}'`),
          sql`,`
        )})`
      ),
    };
  }
);
