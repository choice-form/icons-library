import { splitProps } from 'solid-js';

export interface SecurityProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Security(props: SecurityProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 1.5-5 3c0 6 5 9 5 9s5-3 5-9z"/><path fill="currentColor" fill-opacity=".25" d="M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M7.5 7.5v2"/></g>
    </svg>
  );
}