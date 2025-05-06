import { splitProps } from 'solid-js';

export interface AutoLayoutProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AutoLayout(props: AutoLayoutProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 11.5v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-1M4.5 10.5l3-7 3 7M5.5 8.5h4M13.5 3.5v-1a1 1 0 0 0-1-1h-1m-10 2v-1a1 1 0 0 1 1-1h1"/></g>
    </svg>
  );
}