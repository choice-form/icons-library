import { splitProps } from 'solid-js';

export interface ExpandSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ExpandSmall(props: ExpandSmallProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v1.5M5.5 2.5H4A1.5 1.5 0 0 0 2.5 4v1.5M10.5 13.5H12a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.5 13.5H4A1.5 1.5 0 0 1 2.5 12v-1.5"/></g>
    </svg>
  );
}