import { splitProps } from 'solid-js';

export interface SpanRowProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function SpanRow(props: SpanRowProps) {
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
      <g stroke="currentColor"><path d="M12.5 7.5v-4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1Z"/><path stroke-linecap="round" stroke-opacity=".5" d="M12.5 10.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1"/><path stroke-linecap="round" d="M3.5 4.5s-1 1-1 3 1 3 1 3"/></g>
    </svg>
  );
}