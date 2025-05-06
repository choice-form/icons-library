import { splitProps } from 'solid-js';

export interface ToolbarHandProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarHand(props: ToolbarHandProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 3.5V3a1.5 1.5 0 0 0-3 0v6.5l-2.321-.913A1.21 1.21 0 0 0 .82 10.505l2.619 2.9a6.14 6.14 0 0 0 4.618 2.1h1.307A6.136 6.136 0 0 0 15.5 9.364V3.5a1 1 0 0 0-2 0v1"/><path d="M10.5 3.5V3a1.5 1.5 0 1 1 3 0v3.5M7.5 6.5V2a1.5 1.5 0 0 1 3 0v4.5"/></g>
    </svg>
  );
}