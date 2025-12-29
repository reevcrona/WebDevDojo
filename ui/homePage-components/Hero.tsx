import Link from "next/link";
export default function Hero() {
  return (
    <section>
      <div className="mx-auto relative z-10 flex flex-col gap-10">
        <h2 className="text-7xl md:text-9xl font-anton uppercase leading-[0.9] tracking-wide max-w-6xl">
          Enter the
          <br className="hidden md:block" />
          Code Dojo
          <span className="block text-primary mt-2 drop-shadow-[4px_4px_0px_#000]">
            Forge Your Skills
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-10 mt-4">
          <div className="max-w-xl bg-black text-white p-8 border-4 border-black shadow-hard-crimson">
            <p className="font-mono text-lg md:text-xl leading-relaxed font-bold">
              Master the discipline of coding through rigorous practice and
              structured paths. No fluff. Just raw syntax and logic.
            </p>
          </div>
          <Link
            href="/topics"
            className="bg-primary text-white px-10 py-6 text-2xl md:text-3xl font-anton uppercase tracking-wider border-4 border-black shadow-hard hover:bg-black hover:shadow-hard-crimson transition-all transform hover:-translate-y-1 active:translate-y-1 active:shadow-none lg:ml-auto lg:-rotate-2"
          >
            [ BEGIN TRANING ]
          </Link>
        </div>
      </div>
    </section>
  );
}
