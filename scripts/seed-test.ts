import { db } from "@/lib/db";
import { users } from "@/server/db/schema";

async function main() {
  await db
    .insert(users)
    .values({ name: "jacob", age: 26, email: "jreev@gmail.com" });
}

main().catch((error) => {
  console.error("Failed to insert seed data");
});
