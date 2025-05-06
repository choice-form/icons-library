import { splitProps } from 'solid-js';

export interface FileMoveProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FileMove(props: FileMoveProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11.5 3.5 2 2m0 0-2 2m2-2h-7a2 2 0 0 0-2 2M6.5 9.5h-3a1 1 0 0 0-1 1v4m4-5V12a.5.5 0 0 0 .5.5h2.5m-3-3 3 3m0 0v2M9.5 7.5v1a1 1 0 0 0 1 1h3m-4-8v2"/></g>
    </svg>
  );
}