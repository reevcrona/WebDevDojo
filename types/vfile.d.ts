import "vfile";

export interface RawTocItem {
  value: string;
  href: string;
  depth: number;
  numbering: number[];
  parent: string;
}

declare module "vfile" {
  interface DataMap {
    toc?: RawTocItem[];
  }
}
