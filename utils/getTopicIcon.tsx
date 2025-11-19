import type { LucideIcon } from "lucide-react";
import { Braces, Code, FileCode, Network } from "lucide-react";
import type { ReactElement } from "react";

export type IconName =
  | "javascript"
  | "typescript"
  | "react"
  | "network"
  | "generic";

type IconProps = {
  className?: string;
  size?: number;
};

const iconMap: Record<IconName, LucideIcon> = {
  javascript: Braces,
  typescript: Code,
  react: FileCode,
  network: Network,
  generic: FileCode,
};

export function getIcon(name: IconName, props: IconProps): ReactElement | null {
  const Icon = iconMap[name];
  if (!Icon) return null;

  return <Icon size={props.size} className={props.className} />;
}

export function iconFromSlug(slug: string) {
  const s = slug.toLocaleLowerCase();

  if (s.includes("javascript")) return "javascript";
  if (s.includes("typescript")) return "typescript";
  if (s.includes("react")) return "react";
  if (s.includes("network")) return "network";

  return "generic";
}
