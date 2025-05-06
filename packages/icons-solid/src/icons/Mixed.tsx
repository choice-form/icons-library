import { splitProps } from 'solid-js';

export interface MixedProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Mixed(props: MixedProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/><path stroke-opacity=".5" d="M9 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></g>
    </svg>
  );
}