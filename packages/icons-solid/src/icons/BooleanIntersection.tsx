import { splitProps } from 'solid-js';

export interface BooleanIntersectionProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function BooleanIntersection(props: BooleanIntersectionProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-2v3a1 1 0 0 1-1 1h-3v2a1 1 0 0 0 1 1"/><path d="M8.5 2.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h3v-2a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M6.5 5.5h3v3a1 1 0 0 1-1 1h-3v-3a1 1 0 0 1 1-1"/></g>
    </svg>
  );
}