import { splitProps } from 'solid-js';

export interface FieldPrimaryProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldPrimary(props: FieldPrimaryProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="m4.5 2.5 8 4-8 4z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5v12m10-7-8-4v8z"/>
    </svg>
  );
}