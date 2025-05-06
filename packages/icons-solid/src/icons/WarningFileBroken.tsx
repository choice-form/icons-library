import { splitProps } from 'solid-js';

export interface WarningFileBrokenProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WarningFileBroken(props: WarningFileBrokenProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5.5h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9l-4-4h-1"/><path fill="currentColor" fill-opacity=".25" d="m13.5 4.5-4-4v3a1 1 0 0 0 1 1z"/><path d="m5.5.5-1 2 2 2v5l2-5-1-2 1-2"/></g>
    </svg>
  );
}