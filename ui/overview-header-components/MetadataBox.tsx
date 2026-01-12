/* eslint-disable react/jsx-no-comment-textnodes */
type MetadataBoxProps = {
  label: string;
  value: string;
};

export default function MetadataBox({ label, value }: MetadataBoxProps) {
  return (
    <div className="p-4 flex flex-col gap-1 justify-center">
      <span className="text-white/60 font-bold text-xs">{label}</span>
      <span className="font-bold text-lg">{value}</span>
    </div>
  );
}
