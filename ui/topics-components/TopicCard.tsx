import Link from "next/link";
import { ChevronRight } from "lucide-react";
type TopicCardProps = {
  data: {
    name: string;
    summary: string | null;
    categoryName: string;
  };
};

const colorMap: Record<string, string> = {
  Javascript: "bg-yellow-500/90 text-black",
  Typescript: "bg-blue-400/90 text-black",
  React: "bg-cyan-400/90 text-black",
  Network: "bg-slate-200 text-black",
};

export default function TopicCard({ data }: TopicCardProps) {
  const { name, summary, categoryName } = data;

  const badgeColor = colorMap[categoryName] ?? "bg-slate-200";

  return (
    <Link
      className="group relative bg-slate-800 rounded-xl border border-slate-700/50 p-6 transition-all duration-200 hover:shadow-lg hover:border-slate-600 text-left overflow-hidden"
      href="/"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`${badgeColor} px-2.5 py-1 rounded-md text-xs font-medium`}
        >
          {categoryName}
        </span>
        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-slate-100">
        {name}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{summary}</p>
    </Link>
  );
}
