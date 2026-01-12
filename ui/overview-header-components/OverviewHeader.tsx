/* eslint-disable react/jsx-no-comment-textnodes */
import PrereqPill from "./PrereqPill";
import PrereqContainer from "./PrereqContainer";
import MetadataBox from "./MetadataBox";

type OverviewHeaderProps = {
  header: string | undefined;
  summary: string | undefined | null;
};

export default function OverviewHeader({
  header,
  summary,
}: OverviewHeaderProps) {
  return (
    <div className="bg-white border-4 border-black shadow-hard relative z-20 flex flex-col">
      <div className="p-8 md:p-12">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-2 max-w-4xl text-black">
          {header}
        </h1>
      </div>

      <div className="bg-black text-white border-t-4 border-black grid grid-cols-1 md:grid-cols-4 divide-y-4 divide-white md:divide-y-0 md:divide-x-4 md:divide-white font-mono text-sm">
        <PrereqContainer>
          <PrereqPill>HTML</PrereqPill>
          <PrereqPill>JAVASCRIPT</PrereqPill>
          <PrereqPill>CSS</PrereqPill>
        </PrereqContainer>

        <MetadataBox label=" // ENVIRONMENT" value="CLIENT_SIDE" />
        <MetadataBox label="// CATEGORY" value="WEB_APIS" />
        <MetadataBox label="// UPDATED" value="2023-10-27" />
      </div>
    </div>
  );
}
