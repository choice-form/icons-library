import { splitProps } from 'solid-js';

export interface RoleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Role(props: RoleProps) {
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
      <g stroke="currentColor" stroke-linejoin="round"><path d="m11.207 9.793 1.879-1.879a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0L6.207 4.793a1 1 0 0 0 0 1.414L7 7l-4.5 4.5v2h2l1-1v-1h1v-1h1L9 9l.793.793a1 1 0 0 0 1.414 0Z"/><path stroke-linecap="round" d="m9.5 4.5 2 2"/></g>
    </svg>
  );
}