type OverviewHeaderProps = {
  header: string | undefined;
  summary: string | undefined | null;
};

export default function OverviewHeader({
  header,
  summary,
}: OverviewHeaderProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl leading-tight tracking-[-0.033em] text-[#e5e7eb] font-bold">
        {header}
      </h1>
      <p className="text-[#9da6b9] text-base font-normal leading-normal">
        {summary}
      </p>
    </div>
  );
}
