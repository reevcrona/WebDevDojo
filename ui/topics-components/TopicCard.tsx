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
  Javascript: "text-yellow-400",
  Typescript: "text-blue-400",
  React: "text-cyan-400",
  Network: "text-slate-200",
};

export default function TopicCard({ data }: TopicCardProps) {
  const { name, summary, categoryName, slug } = data;

  const badgeColor = colorMap[categoryName] ?? "bg-slate-200";
  const iconColor = colorMap[categoryName] ?? "text-slate-200";
  const iconName = iconFromSlug(categoryName);

  return (
    <Link
      className="group relative bg-slate-800 rounded-xl border border-slate-700/50 p-6 transition-all duration-200 hover:shadow-lg hover:border-slate-600 text-left overflow-hidden"
      href={`/topics/${slug}/overview`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex gap-1 items-center">
          {getIcon(iconName, { className: iconColor, size: 20 })}
          <span
            className={`${badgeColor} px-2.5 py-1 rounded-md text-normal font-bold`}
          >
            {categoryName}
          </span>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-slate-100">
        {name}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{summary}</p>
    </Link>
  );
}
