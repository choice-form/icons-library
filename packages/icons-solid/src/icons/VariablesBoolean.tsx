import { splitProps } from 'solid-js';

export interface VariablesBooleanProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function VariablesBoolean(props: VariablesBooleanProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4.5H6a3.5 3.5 0 1 0 0 7h3a3.5 3.5 0 1 0 0-7"/><path d="M4.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g>
    </svg>
  );
}