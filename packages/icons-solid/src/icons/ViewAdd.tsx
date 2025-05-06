import { splitProps } from 'solid-js';

export interface ViewAddProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ViewAdd(props: ViewAddProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 10.5v1a1 1 0 0 0 1 1h1m0-10h-1a1 1 0 0 0-1 1v1m8-2h1a1 1 0 0 1 1 1v1m-4-2h-2m-4 6v-2M11.5 10.5h-4m2-2v4"/><path fill="currentColor" fill-opacity=".25" d="M13.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/></g>
    </svg>
  );
}