import { splitProps } from 'solid-js';

export interface WarningNotFoundProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WarningNotFound(props: WarningNotFoundProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M8.5 4.5h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"/><path d="M3.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M14.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M.5 2.5h15m-15 11h15"/></g>
    </svg>
  );
}