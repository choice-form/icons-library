import { splitProps } from 'solid-js';

export interface ShowProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Show(props: ShowProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 7.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M7.5 5.5a2 2 0 0 1-2 2"/><path d="M7.5 3.5c-3.185 0-5.102 2.536-5.75 3.57a.8.8 0 0 0 0 .86c.648 1.034 2.565 3.57 5.75 3.57s5.102-2.536 5.75-3.57a.8.8 0 0 0 0-.86C12.603 6.035 10.686 3.5 7.5 3.5"/></g>
    </svg>
  );
}