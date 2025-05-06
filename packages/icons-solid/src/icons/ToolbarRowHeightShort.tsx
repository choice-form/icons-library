import { splitProps } from 'solid-js';

export interface ToolbarRowHeightShortProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarRowHeightShort(props: ToolbarRowHeightShortProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2M7.5 3.5h6m-6 3h6m-6 3h6m-6 3h6"/></g>
    </svg>
  );
}