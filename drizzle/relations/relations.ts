import { relations } from "drizzle-orm";
import { topics } from "@/drizzle/schema/topics";
import { topicOverviews } from "@/drizzle/schema/topicOverviews";
import { categories } from "@/drizzle/schema/categories";
export const topicsRelations = relations(topics, ({ one }) => ({
  category: one(categories, {
    fields: [topics.categoryId],
    references: [categories.id],
  }),

  overview: one(topicOverviews, {
    fields: [topics.id],
    references: [topicOverviews.topicId],
  }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  topics: many(topics),
}));

export const topicOverviewsRelations = relations(topicOverviews, ({ one }) => ({
  topic: one(topics, {
    fields: [topicOverviews.topicId],
    references: [topics.id],
  }),
}));
