import { splitProps } from 'solid-js';

export interface Rotate90RightProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Rotate90Right(props: Rotate90RightProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M10.293 8.793 8.207 6.707a1 1 0 0 0-1.414 0L4.707 8.793a1 1 0 0 0 0 1.414l2.086 2.086a1 1 0 0 0 1.414 0l2.086-2.086a1 1 0 0 0 0-1.414ZM4.5 4.5l1.232-1.232a2.5 2.5 0 0 1 3.536 0L10.5 4.5"/><path stroke-linejoin="round" d="M10.5 2.5v2l-2 .5"/></g>
    </svg>
  );
}