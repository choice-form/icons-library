import { splitProps } from 'solid-js';

export interface WarningCircleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WarningCircle(props: WarningCircleProps) {
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
      <g stroke="currentColor"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/><path stroke-linecap="round" d="M7.5 4.5v4"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5h.005"/></g>
    </svg>
  );
}