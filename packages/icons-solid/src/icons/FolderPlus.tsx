import { splitProps } from 'solid-js';

export interface FolderPlusProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FolderPlus(props: FolderPlusProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.914a1 1 0 0 1-.707-.293L5.793 2.793a1 1 0 0 0-.707-.293H3.5a1 1 0 0 0-1 1v2"/><path fill="currentColor" fill-opacity=".25" d="M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/><path d="M7.5 10.5h-4m2 2v-4"/></g>
    </svg>
  );
}