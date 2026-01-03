import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getIcon, iconFromSlug } from "@/utils/getTopicIcon";

type TopicCardProps = {
  data: {
    name: string;
    summary: string | null;
    categoryName: string;
    slug: string;
  };
};

const colorMap: Record<string, string> = {
  Javascript: "bg-yellow-400",
  Typescript: "bg-blue-400",
  React: "bg-cyan-400",
  Network: "bg-slate-200",
};

export default function TopicCard({ data }: TopicCardProps) {
  const { name, summary, categoryName, slug } = data;

  const colorSetting = colorMap[categoryName] ?? "bg-slate-200";
  const iconName = iconFromSlug(categoryName);

  return (
    <Link
      href={`/topics/${slug}/overview`}
      className={`group relative bg-white border-4 border-black p-0 shadow-hard flex flex-col h-full min-h-[360px] transition-all duration-200 ease-out hover:scale-[1.02] active:shadow-none active:translate-y-1`}
    >
      <div
        className={`p-6 border-b-4 border-black ${colorSetting} flex justify-between items-start`}
      >
        <div className="w-12 h-12 bg-white border-2 shadow-hard-sm border-black flex items-center justify-center">
          {getIcon(iconName, {
            className: "text-3xl text-black",
            size: 20,
          })}
        </div>

        {/* Arrow Container: Changes to black on hover.
            Icon: Slides right when the whole card (group) is hovered.
        */}
        <div className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center transition-colors duration-200 group-hover:bg-primary shadow-hard-sm">
          <ChevronRight className="w-5 h-5 text-black transition-transform duration-200 group-hover:text-white" />
        </div>
      </div>

      <div className="p-8 flex flex-col grow">
        <h3 className="text-4xl font-anton uppercase mb-4 leading-none tracking-normal text-black">
          {name}
        </h3>
        <p className="font-mono text-sm font-medium text-gray-800 leading-snug tracking-tight mb-6">
          {summary}
        </p>

        <div className="mt-auto">
          <div className="border-t-2 border-dashed border-black w-full my-4"></div>
          <div className="text-xs font-mono font-bold text-gray-500 mb-3 uppercase">
            TAGS //
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center px-2 py-1 border-2 border-black bg-white text-black text-xs font-mono font-bold uppercase shadow-hard-sm">
              {categoryName}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
