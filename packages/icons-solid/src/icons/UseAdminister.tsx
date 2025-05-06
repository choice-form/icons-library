import { splitProps } from 'solid-js';

export interface UseAdministerProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function UseAdminister(props: UseAdministerProps) {
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
      <g stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h3"/><path d="m13.793 8.793-1.586-1.586a1 1 0 0 0-1.414 0l-.586.586a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 0 0-1.414Z"/><path stroke-linecap="round" d="m11 10-3.5 3.5M9.5 13.5l-1-1m2 0-1-1"/></g>
    </svg>
  );
}