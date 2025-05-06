import { splitProps } from 'solid-js';

export interface ActionIfProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionIf(props: ActionIfProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path fill="currentColor" fill-opacity=".25" d="M2.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M3.5 12.5v-4a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-3"/><path stroke-opacity=".25" d="M9.5 7.5h2a1 1 0 0 1 1 1v4"/></g>
    </svg>
  );
}