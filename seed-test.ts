import { db } from "./app/lib/db";
import { users } from "./app/db/schema";

async function main() {
  await db
    .insert(users)
    .values({ name: "alex", age: 26, email: "alxreev@gmail.com" });
}

main().catch((error) => {
  console.error("Failed to insert seed data");
});
