import { relations } from "drizzle-orm";
import { topics } from "@/drizzle/schema/topics";
import { topicOverviews } from "@/drizzle/schema/topicOverviews";
import { categories } from "@/drizzle/schema/categories";
import { topicResources } from "../schema/topicResources";
import { topicPrerequisites } from "@/drizzle/schema/topicPrerequisites";
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

  prerequisites: many(topicPrerequisites, {
    relationName: "topic_to_prerequisites",
  }),

  requiredFor: many(topicPrerequisites, {
    relationName: "prerequisite_to_topics",
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

export const topicResourcesRelations = relations(topicResources, ({ one }) => ({
  topic: one(topics, {
    fields: [topicResources.topicId],
    references: [topics.id],
  }),
}));

export const topicPrerequisitesRelations = relations(
  topicPrerequisites,
  ({ one }) => ({
    topic: one(topics, {
      fields: [topicPrerequisites.topicId],
      references: [topics.id],
      relationName: "topic_to_prerequisites",
    }),
    prerequisiteDetails: one(topics, {
      fields: [topicPrerequisites.prerequisiteId],
      references: [topics.id],
      relationName: "prerequisite_to_topics",
    }),
  }),
);
