CREATE TYPE "public"."resource_format" AS ENUM('ARTICLE', 'VIDEO', 'DOC', 'TUTORIAL', 'COURSE', 'BOOK', 'CHEATSHEET', 'TOOL', 'REFERENCE');--> statement-breakpoint
CREATE TABLE "topic_resources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"topic_id" uuid NOT NULL,
	"title" text NOT NULL,
	"url" text NOT NULL,
	"source" text NOT NULL,
	"format" "resource_format" NOT NULL,
	"summary" text,
	"position" integer DEFAULT 1,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "topic_resources" ADD CONSTRAINT "topic_resources_topic_id_topics_topic_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("topic_id") ON DELETE cascade ON UPDATE no action;