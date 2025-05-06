import { splitProps } from 'solid-js';

export interface TagAddProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TagAdd(props: TagAddProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 10.5v4M10.5 12.5h4M11.892 4.5A3.54 3.54 0 0 1 11 8l-3 3a3.54 3.54 0 0 1-3.5.892m5-9.784A3.54 3.54 0 0 0 6 3L3 6a3.54 3.54 0 0 0-.892 3.5M12.5 1.5l-4 4m-3 3-4 4"/></g>
    </svg>
  );
}