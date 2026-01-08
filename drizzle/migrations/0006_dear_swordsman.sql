CREATE TYPE "public"."environment" AS ENUM('CLIENT SIDE', 'SERVER SIDE', 'DESIGN SYSTEM', 'FULL STACK');--> statement-breakpoint
ALTER TABLE "topic_overviews" ADD COLUMN "environment" "environment" NOT NULL;--> statement-breakpoint
ALTER TABLE "topic_overviews" ADD COLUMN "subcategories" text NOT NULL;--> statement-breakpoint
ALTER TABLE "topic_overviews" ADD CONSTRAINT "subcategory_check" CHECK ("topic_overviews"."subcategories" IN ('WEB APIS','DOM MANIPULATION','EVENT LOGIC','STATE MANAGEMENT','SQL OPERATIONS'));