import { splitProps } from 'solid-js';

export interface ToolbarActionProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarAction(props: ToolbarActionProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 7.5 3 6l3.5-3.5-1.25 4.75L7.5 8.5 6 10l-3.5 3.5 1.25-4.75zM9.5 13.5l2-5 2 5M10 12.5h3"/></g>
    </svg>
  );
}