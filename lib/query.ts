import { db } from "@/lib/db";
import { categories } from "@/drizzle/schema/categories";
export async function getCategories() {
  const rows = await db.select().from(categories);
  if (rows.length === 0) {
    throw new Error("No categories found");
  }
  return rows;
}
