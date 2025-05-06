import { splitProps } from 'solid-js';

export interface FieldTypeAiProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeAi(props: FieldTypeAiProps) {
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
      <g stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" stroke="currentColor" d="M9.5 4.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2"/><path stroke="#AB0A83" d="M2.5 9.5a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4"/></g>
    </svg>
  );
}