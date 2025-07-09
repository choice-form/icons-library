export interface IconMetadata {
  name: string;
  category: string;
  tags: string[];
  filename: string;
  width: number | string;
  height: number | string;
}

export interface IconComponentProps extends React.SVGProps<SVGSVGElement> {}

export interface IconItemData extends IconMetadata {
  IconComponent: React.FC<IconComponentProps>;
}
