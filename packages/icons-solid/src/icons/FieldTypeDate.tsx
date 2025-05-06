import { splitProps } from 'solid-js';

export interface FieldTypeDateProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeDate(props: FieldTypeDateProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1m-4 0h2M2.5 6.5h10M4.5 2.5v2m6-2v2M4.5 8.5h.005m1.995 0h.005m1.995 0h.005m-4.005 2h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005"/></g>
    </svg>
  );
}