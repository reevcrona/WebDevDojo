import NavLink from "@/ui/NavLink";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="bg-primary border-b-8 border-black px-6 py-5 md:px-16 z-40 sticky top-0">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-6 items-center">
          <Image
            src="/logo.png"
            alt="WebDevDojo Logo"
            width={2048}
            height={2048}
            className="w-18 h-auto border-2 border-black shadow-hard"
          />
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
