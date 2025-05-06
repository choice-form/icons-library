import { splitProps } from 'solid-js';

export interface ZoomInProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ZoomIn(props: ZoomInProps) {
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
      <path stroke="currentColor" stroke-linecap="round" d="M4.5 6.5h2m0 0h2m-2 0v-2m0 2v2m4 2 3 3m-2-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
    </svg>
  );
}