import NavLink from "@/ui/NavLink";

export default function Navbar() {
  return (
    <header className="bg-primary border-b-8 border-black px-6 py-5 md:px-12 z-40 sticky top-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-white text-4xl md:text-5xl font-anton uppercase tracking-wider drop-shadow-[3px_3px_0px_#000] leading-none mt-1">
            WEBDEVDOJO
          </h2>
        </div>

        <nav>
          <ul className="flex gap-10 py-4 px-3 text-white text-xl font-mono font-bold">
            <li>
              <NavLink href="/">[ HOME ]</NavLink>
            </li>
            <li>
              <NavLink href="/topics">[ TOPICS ]</NavLink>
            </li>
            <li>
              <NavLink href="/">[ LEARN ]</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
