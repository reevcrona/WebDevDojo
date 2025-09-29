import { pgTable, uuid, text, timestamp, jsonb } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: uuid("category_id").defaultRandom().primaryKey(),

  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),

  imageUrl: text("image_url").notNull(),
  imageAlt: text("image_alt").notNull(),
  imageMeta: jsonb("image_meta")
    .$type<{ width: number; height: number }>()
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
