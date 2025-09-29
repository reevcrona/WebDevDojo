import type { LayoutProps } from "@/types/layout-types";

export default function Layout({ children }: LayoutProps) {
  return <main className="flex items-center justify-center">{children}</main>;
}
