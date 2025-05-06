import { splitProps } from 'solid-js';

export interface FileDuplicateProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FileDuplicate(props: FileDuplicateProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="M12.5 10.5h-5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3l3 3v5a1 1 0 0 1-1 1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5m-3-3 3 3m-3-3V4a.5.5 0 0 0 .5.5h2.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 5.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1"/>
    </svg>
  );
}