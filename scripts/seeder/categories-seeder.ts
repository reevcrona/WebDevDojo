import { db } from "@/lib/db";
import { categories } from "@/server/db/schema/categories";

async function main() {
  await db.insert(categories).values({ name: "Javascript" });
}

main().catch((error) => {
  console.error("Failed to insert categories to Database.");
});
