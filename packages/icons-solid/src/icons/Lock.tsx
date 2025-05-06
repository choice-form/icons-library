import { splitProps } from 'solid-js';

export interface LockProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Lock(props: LockProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13 15.5H3A1.5 1.5 0 0 1 1.5 14V9A1.5 1.5 0 0 1 3 7.5h10A1.5 1.5 0 0 1 14.5 9v5a1.5 1.5 0 0 1-1.5 1.5M4.5 5.5V4a3.5 3.5 0 1 1 7 0v1.5"/><path d="M8 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g>
    </svg>
  );
}