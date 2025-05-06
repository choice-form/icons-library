import { splitProps } from 'solid-js';

export interface LoaderCircleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function LoaderCircle(props: LoaderCircleProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-opacity=".25" d="M2.5 8a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0"/><path d="M13.5 8A5.5 5.5 0 0 0 8 2.5"/></g>
    </svg>
  );
}