/* eslint-disable react/jsx-no-comment-textnodes */
import PrereqPill from "./PrereqPill";
import PrereqContainer from "./PrereqContainer";
import MetadataBox from "./MetadataBox";
import type {
  TopicMetadata,
  TopicPrerequisiteMetadata,
} from "@/types/data-types";

type OverviewHeaderProps = {
  topic: TopicMetadata;
  topicPrerequisites: TopicPrerequisiteMetadata;
};

export default function OverviewHeader({
  topic,
  topicPrerequisites,
}: OverviewHeaderProps) {
  const { name, environment, subcategories, updatedAt } = topic;
  const formattedDate =
    updatedAt instanceof Date ? updatedAt.toISOString().split("T")[0] : "N/A";
  return (
    <div className="bg-white border-4 border-black shadow-hard relative z-20 flex flex-col mb-8">
      <div className="p-8 md:p-12">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-2 max-w-4xl text-black">
          {name}
        </h1>
      </div>

      <div className="bg-black text-white border-t-4 border-black grid grid-cols-1 md:grid-cols-4 divide-y-4 divide-white md:divide-y-0 md:divide-x-4 md:divide-white font-mono text-sm">
        <PrereqContainer>
          {topicPrerequisites.map((p) => {
            return <PrereqPill key={p.slug}>{p.name}</PrereqPill>;
          })}
        </PrereqContainer>

        <MetadataBox label=" // ENVIRONMENT" value={environment} />
        <MetadataBox label="// CATEGORY" value={subcategories} />
        <MetadataBox label="// UPDATED" value={formattedDate} />
      </div>
    </div>
  );
}
