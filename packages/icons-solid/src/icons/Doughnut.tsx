import { splitProps } from 'solid-js';

export interface DoughnutProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Doughnut(props: DoughnutProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M9.5 5V2.6a5.01 5.01 0 0 1 3.9 3.9H11C11 6 10 5 9.5 5"/><path d="M2.5 8.5a5 5 0 0 0 10 0h-3a2 2 0 1 1-2-2v-3a5 5 0 0 0-5 5"/></g>
    </svg>
  );
}