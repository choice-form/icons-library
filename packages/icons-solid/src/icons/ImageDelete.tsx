import { splitProps } from 'solid-js';

export interface ImageDeleteProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ImageDelete(props: ImageDeleteProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke-linejoin="round" d="M12.5 5.5v-2a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3M2 11l2.5-2.5"/><path d="M14.5 9.5h-7m1 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4"/><path stroke-linejoin="round" d="M9.5 9.5v-2h3v2"/></g>
    </svg>
  );
}