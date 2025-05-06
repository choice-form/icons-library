import { splitProps } from 'solid-js';

export interface LogInProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function LogIn(props: LogInProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 8h-9M8.5 11l3-3-3-3"/><path d="M5.5 4.5V4A1.5 1.5 0 0 1 7 2.5h5A1.5 1.5 0 0 1 13.5 4v8a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 12v-.5"/></g>
    </svg>
  );
}