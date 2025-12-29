import Link from "next/link";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

type Props = {
  children: React.ReactNode;
  href: LinkProps["href"];
};

export default function NavLink({ children, href }: Props) {
  return (
    <Link
      href={href}
      className="
        bg-black inline-block text-white px-5 py-2.5 text-base font-bold font-mono tracking-tight 
        border-2 border-transparent
        shadow-hard-white 
        
        /* Hover State */
        hover:bg-white hover:text-black hover:border-black hover:shadow-hard
        
        /* Active (Click) State */
         active:shadow-none active:translate-y-1
        
        /* Optimized Transitions */
        transition-all duration-100 ease-in-out transform
      "
    >
      {children}
    </Link>
  );
}
