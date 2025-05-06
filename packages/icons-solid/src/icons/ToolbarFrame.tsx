import { splitProps } from 'solid-js';

export interface ToolbarFrameProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarFrame(props: ToolbarFrameProps) {
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
      <path stroke="currentColor" stroke-linecap="round" d="M1.5 4.5h13m-13 7h13m-3-10v13m-7-13v13"/>
    </svg>
  );
}