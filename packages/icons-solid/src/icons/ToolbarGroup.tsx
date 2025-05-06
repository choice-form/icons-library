import { splitProps } from 'solid-js';

export interface ToolbarGroupProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarGroup(props: ToolbarGroupProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"/><path d="m3.5 4.5 1 1 2-2m2 1h3M13.5 13.5v-3a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v3"/><path d="m3.5 12.5 1 1 2-2m2 1h3"/></g>
    </svg>
  );
}