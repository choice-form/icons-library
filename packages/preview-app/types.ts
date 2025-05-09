export interface IconMetadata {
  name: string;
  category: string;
  tags: string[];
  filename: string;
  width: number | string;
  height: number | string;
  optimizedSvg: string;
}

export interface IconComponentProps extends React.SVGProps<SVGSVGElement> {}

export interface IconItemData extends IconMetadata {
  IconComponent: React.FC<IconComponentProps>;
}

// Tauri 全局变量的类型定义
declare interface Window {
  __TAURI__?: any;
}
