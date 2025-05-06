import { splitProps } from 'solid-js';

export interface FieldRuleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldRule(props: FieldRuleProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="M5.5 12.5v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m-11-2v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M9.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M14.5 14.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1"/>
    </svg>
  );
}