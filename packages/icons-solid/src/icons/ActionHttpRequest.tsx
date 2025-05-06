import { splitProps } from 'solid-js';

export interface ActionHttpRequestProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionHttpRequest(props: ActionHttpRequestProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.5v3a1 1 0 0 0 2 0v-3m2 2v-2h1a1 1 0 0 1 0 2m-1 0v2m0-2h1m0 0 1 2m2-4v4h3v3a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4"/><path stroke-opacity=".25" d="M3.5 11.5h9"/></g>
    </svg>
  );
}