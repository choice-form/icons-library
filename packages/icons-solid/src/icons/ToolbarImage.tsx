import { splitProps } from 'solid-js';

export interface ToolbarImageProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarImage(props: ToolbarImageProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m.5 12.5 3-3 2 2 5-5 5 5"/><path d="M14 15.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5h12A1.5 1.5 0 0 1 15.5 2v12a1.5 1.5 0 0 1-1.5 1.5"/><path d="M5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g>
    </svg>
  );
}