import { splitProps } from 'solid-js';

export interface BlueprintNodeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function BlueprintNode(props: BlueprintNodeProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M2.5 6.5v-3a1 1 0 0 1 1-1h3m-4 6v3a1 1 0 0 0 1 1h3m2 0h3a1 1 0 0 0 1-1v-3m0-2v-3a1 1 0 0 0-1-1h-3"/><path d="M6.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM1.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM6.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></g>
    </svg>
  );
}