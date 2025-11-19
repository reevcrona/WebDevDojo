import type { LucideIcon } from "lucide-react";
import { Braces, Code, FileCode, Network } from "lucide-react";
import type { ReactElement } from "react";
export type IconName = "javascript" | "typescript" | "react" | "network";

type IconProps = {
  className: string;
  size?: number;
};

const iconMap: Record<string, LucideIcon> = {
  javascript: Braces,
  typescript: Code,
  react: FileCode,
  network: Network,
};

export function getIcon(name: string, props: IconProps): ReactElement | null {
  const Icon = iconMap[name];
  if (!Icon) return null;

  return <Icon size={props.size} className={props.className} />;
}
