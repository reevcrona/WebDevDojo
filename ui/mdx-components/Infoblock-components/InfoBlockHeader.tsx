type InfoBlockProps = {
  title: string;
  tag?: string;
};

export default function InfoBlockHeader({ title, tag }: InfoBlockProps) {
  return (
    <div className="flex items-center justify-between mb-6 border-b-2 border-black/10 pb-4">
      <h3 className="text-2xl font-black uppercase">{title}</h3>
      {tag && (
        <span className="font-mono text-xs font-bold bg-primary/10 text-primary px-2 py-1">
          {tag}
        </span>
      )}
    </div>
  );
}
