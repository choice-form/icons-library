import { splitProps } from 'solid-js';

export interface ToolbarAiProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarAi(props: ToolbarAiProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 10.5a5 5 0 0 0 5-5 5 5 0 0 0 5 5 5 5 0 0 0-5 5 5 5 0 0 0-5-5M9.5 3.5a3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0-3-3"/></g>
    </svg>
  );
}