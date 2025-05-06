import { splitProps } from 'solid-js';

export interface FieldTypeDateAndTimeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeDateAndTime(props: FieldTypeDateAndTimeProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2m5-9h1a1 1 0 0 1 1 1v1m-6-2h2M2.5 6.5h5M4.5 2.5v2m6-2v2M11.5 11.5l-1-1v-1"/><path d="M13.5 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M4.5 8.5h.005m-.005 2h.005"/></g>
    </svg>
  );
}