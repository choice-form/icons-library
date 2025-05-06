import { splitProps } from 'solid-js';

export interface FileDeleteProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FileDelete(props: FileDeleteProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M8.5 9.5h-7m1 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4"/><path stroke-linejoin="round" d="M3.5 9.5v-2h3v2"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="m13.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path stroke-linejoin="round" d="M9.5 1.5h-4a1 1 0 0 0-1 1v2m9 1v7a1 1 0 0 1-1 1h-2"/></g>
    </svg>
  );
}