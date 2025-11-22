import type { ResourceFormat } from "@/types/resource-format";

type TopicResource = {
  topicSlug: string;
  title: string;
  url: string;
  source: string;
  format: ResourceFormat;
  summary?: string;
  position?: number;
};

export const topicResourcesData: TopicResource[] = [
  {
    topicSlug: "dom-manipulation",
    title: "JavaScript HTML DOM",
    url: "https://www.w3schools.com/js/js_htmldom.asp",
    source: "w3schools",
    format: "TUTORIAL",
    summary: "This is a Intro to Javascript HTML DOM",
    position: 1,
  },
];
