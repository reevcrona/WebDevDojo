import Link from "next/link";

type TopicCardProps = {
  name: string;
  summary: string | null;
};

export default function TopicCard({ name, summary }: TopicCardProps) {
  return (
    <Link
      className="group relative bg-slate-800 rounded-xl border border-slate-700/50 p-6 transition-all duration-200 hover:shadow-lg hover:border-slate-600 text-left overflow-hidden"
      href="/"
    >
      <h3 className="text-white">{name}</h3>
      <p className="text-white">{summary}</p>
    </Link>
  );
}
