import { slugify } from "@/lib/slugify";

type LearnSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function LearnSection({ title, children }: LearnSectionProps) {
  const id = slugify(title);

  return (
    <section id={id} className="flex flex-col gap-4 scroll-mt-24">
      <h3 className="text-2xl font-bold text-[#e5e7eb]">{title}</h3>
      <div className="text-[#9da6b9] leading-relaxed text-base [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 ">
        {children}
      </div>
    </section>
  );
}
