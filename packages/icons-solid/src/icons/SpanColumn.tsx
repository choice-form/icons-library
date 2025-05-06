import { splitProps } from 'solid-js';

export interface SpanColumnProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function SpanColumn(props: SpanColumnProps) {
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
      <g stroke="currentColor"><path d="M7.5 2.5h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"/><path stroke-linecap="round" stroke-opacity=".5" d="M10.5 2.5h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1"/><path stroke-linecap="round" d="M4.5 11.5s1 1 3 1 3-1 3-1"/></g>
    </svg>
  );
}