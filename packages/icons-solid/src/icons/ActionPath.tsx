import { splitProps } from 'solid-js';

export interface ActionPathProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionPath(props: ActionPathProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path fill="currentColor" fill-opacity=".25" d="M11.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M4.5 2.5h7m0 5h-6m-2-2v6a1 1 0 0 0 1 1h7"/></g>
    </svg>
  );
}