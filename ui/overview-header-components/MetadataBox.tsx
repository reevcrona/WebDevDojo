/* eslint-disable react/jsx-no-comment-textnodes */
import type { Environment } from "@/drizzle/schema";
import type { SubCategory } from "@/types/constants";
type MetadataBoxProps = {
  label: string;
  value: Environment | SubCategory | string | null;
};

export default function MetadataBox({ label, value }: MetadataBoxProps) {
  return (
    <div className="p-4 flex flex-col gap-1 justify-center">
      <span className="text-white/60 font-bold text-xs">{label}</span>
      <span className="font-bold text-lg">{value}</span>
    </div>
  );
}
