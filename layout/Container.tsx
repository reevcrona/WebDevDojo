import { LayoutProps } from "@/types/layout-types";

export default function Container({ children }: LayoutProps) {
  return <main className="max-w-7xl  w-full">{children}</main>;
}
