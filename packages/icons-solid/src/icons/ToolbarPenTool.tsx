import { splitProps } from 'solid-js';

export interface ToolbarPenToolProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarPenTool(props: ToolbarPenToolProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M.5 15.5l5.44-5.44M7.5.5l8 8"/><path d="m13.5 6.5-2 7-11 2 2-11 7-2"/></g>
    </svg>
  );
}