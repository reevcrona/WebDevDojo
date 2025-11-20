CREATE TABLE "related_topics" (
	"topic_id" uuid NOT NULL,
	"related_topic_id" uuid NOT NULL,
	"weight" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "topic_related_pk" PRIMARY KEY("topic_id","related_topic_id")
);
--> statement-breakpoint
ALTER TABLE "related_topics" ADD CONSTRAINT "related_topics_topic_id_topics_topic_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("topic_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_topics" ADD CONSTRAINT "related_topics_related_topic_id_topics_topic_id_fk" FOREIGN KEY ("related_topic_id") REFERENCES "public"."topics"("topic_id") ON DELETE cascade ON UPDATE no action;