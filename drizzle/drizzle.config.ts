import { defineConfig } from "drizzle-kit";
import { env } from "@/utils/env-checker";

export default defineConfig({
  schema: "./drizzle/schema",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.databaseUrl,
  },
});
