import { splitProps } from 'solid-js';

export interface EmptyUserProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyUser(props: EmptyUserProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M5.5 6.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path stroke-linejoin="round" d="M12.5 14.5v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1"/></g>
    </svg>
  );
}