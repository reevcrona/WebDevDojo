import { relations } from "drizzle-orm";
import { topics } from "@/drizzle/schema/topics";
import { categories } from "@/drizzle/schema/categories";
export const topicsRelations = relations(topics, ({ one }) => ({
  category: one(categories, {
    fields: [topics.categoryId],
    references: [categories.id],
  }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  topics: many(topics),
}));
