import { splitProps } from 'solid-js';

export interface FileSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FileSolid(props: FileSolidProps) {
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
      <g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 2.5h2v4a1 1 0 0 0 1 1h4v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"/><path d="M8.5 5.5v-3l3 3z"/></g>
    </svg>
  );
}