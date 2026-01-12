CREATE TYPE "public"."subCategoryEnum" AS ENUM('NONE', 'WEB APIS', 'DOM MANIPULATION', 'EVENT LOGIC', 'STATE MANAGEMENT', 'SQL OPERATIONS');--> statement-breakpoint
ALTER TABLE "topic_overviews" DROP CONSTRAINT "subcategory_check";--> statement-breakpoint
ALTER TABLE "topics" ADD COLUMN "environment" "environment" DEFAULT 'CLIENT SIDE';--> statement-breakpoint
ALTER TABLE "topics" ADD COLUMN "subcategory" "subCategoryEnum" DEFAULT 'NONE';--> statement-breakpoint
ALTER TABLE "topic_overviews" DROP COLUMN "environment";--> statement-breakpoint
ALTER TABLE "topic_overviews" DROP COLUMN "subcategories";