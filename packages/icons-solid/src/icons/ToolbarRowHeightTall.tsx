import { splitProps } from 'solid-js';

export interface ToolbarRowHeightTallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarRowHeightTall(props: ToolbarRowHeightTallProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2"/><path fill="currentColor" fill-opacity=".25" d="M12.5 2.5h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5h6m-1-3h-4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"/>
    </svg>
  );
}