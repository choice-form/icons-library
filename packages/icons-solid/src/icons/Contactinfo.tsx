import { splitProps } from 'solid-js';

export interface ContactinfoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Contactinfo(props: ContactinfoProps) {
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
      <g stroke="currentColor"><path d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M11.5 12.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1"/><path fill="currentColor" fill-opacity=".25" stroke-linecap="round" stroke-linejoin="round" d="M8 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
    </svg>
  );
}