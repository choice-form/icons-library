export interface IconNode {
  tag: string;
  attrs?: Record<string, string>;
  children?: IconNode[];
}

export interface Icon {
  name: string;
  toSvg: (attrs?: Record<string, string>) => string;
  toString: () => string;
}

export interface IconsOptions {
  icons: Record<string, Icon>;
  attrs?: Record<string, string | string[]>;
  nameAttr?: string;
}

export interface IconMetadata {
  name: string;
  category: string;
  tags: string[];
  filename: string;
  width: number | null;
  height: number | null;
  optimizedSvg: string;
}
