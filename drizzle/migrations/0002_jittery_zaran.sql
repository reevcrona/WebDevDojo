CREATE TABLE "topic_overviews" (
	"overview_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"topic_id" uuid NOT NULL,
	"mdx" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "topic_overviews_topic_id_unique" UNIQUE("topic_id")
);
--> statement-breakpoint
CREATE TABLE "topic_prerequisites" (
	"topic_id" uuid NOT NULL,
	"prerequisite_id" uuid NOT NULL,
	CONSTRAINT "topic_prerequisites_pk" PRIMARY KEY("topic_id","prerequisite_id")
);
--> statement-breakpoint
ALTER TABLE "topic_overviews" ADD CONSTRAINT "topic_overviews_topic_id_topics_topic_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("topic_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topic_prerequisites" ADD CONSTRAINT "topic_prerequisites_topic_id_topics_topic_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("topic_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topic_prerequisites" ADD CONSTRAINT "topic_prerequisites_prerequisite_id_topics_topic_id_fk" FOREIGN KEY ("prerequisite_id") REFERENCES "public"."topics"("topic_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN "image_url";--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN "image_alt";--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN "image_meta";