import { splitProps } from 'solid-js';

export interface RenameProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Rename(props: RenameProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 2.5h1m0 0h1m-1 0v11m-1 0h2M7.5 4.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5m4-7h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1"/></g>
    </svg>
  );
}