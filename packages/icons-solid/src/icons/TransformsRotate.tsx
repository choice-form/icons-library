import { splitProps } from 'solid-js';

export interface TransformsRotateProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TransformsRotate(props: TransformsRotateProps) {
  const [local, others] = splitProps(props, ['width', 'height', 'color', 'title']);
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 16 16" 
      width={local.width ?? "16"} 
      height={local.height ?? "16"} 
      fill={local.color ?? "none"} 
      aria-hidden={local.title ? "false" : "true"}
      class="choiceform-icon"
      {...others}
    >
      {local.title && <title>{local.title}</title>}
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 8A4.5 4.5 0 1 0 8 3.5a4.88 4.88 0 0 0-3.37 1.37L3.5 6m0 0V3.5m0 2.5H6"/>
    </svg>
  );
}