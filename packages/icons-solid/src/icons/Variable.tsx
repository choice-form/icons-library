import { splitProps } from 'solid-js';

export interface VariableProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Variable(props: VariableProps) {
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
      <g stroke="currentColor" stroke-linejoin="round"><path d="M7.5 2.5 12 5v5l-4.5 2.5L3 10V5z"/><path stroke-linecap="round" d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
    </svg>
  );
}