import { splitProps } from 'solid-js';

export interface UseLockProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function UseLock(props: UseLockProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h3"/><path fill="currentColor" fill-opacity=".25" d="M13.5 10.5h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M10.5 10V9a1.5 1.5 0 0 1 3 0v1"/></g>
    </svg>
  );
}