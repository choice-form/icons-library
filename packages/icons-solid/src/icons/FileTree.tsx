import { splitProps } from 'solid-js';

export interface FileTreeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FileTree(props: FileTreeProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 11.5h4m-4-4h4m-9-4h9m-12-1v5m0 0v3a1 1 0 0 0 1 1h2m-3-4h3M4.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
    </svg>
  );
}