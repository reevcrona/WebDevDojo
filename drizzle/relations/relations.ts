import { relations } from "drizzle-orm";
import { topics } from "@/drizzle/schema/topics";
import { topicOverviews } from "@/drizzle/schema/topicOverviews";
import { categories } from "@/drizzle/schema/categories";
import { topicResources } from "../schema/topicResources";
export const topicsRelations = relations(topics, ({ one, many }) => ({
  category: one(categories, {
    fields: [topics.categoryId],
    references: [categories.id],
  }),

  overview: one(topicOverviews, {
    fields: [topics.id],
    references: [topicOverviews.topicId],
  }),

  resources: many(topicResources),
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

export const topicResourcesRelations = relations(topicResources, ({ one }) => ({
  topic: one(topics, {
    fields: [topicResources.topicId],
    references: [topics.id],
  }),
}));
