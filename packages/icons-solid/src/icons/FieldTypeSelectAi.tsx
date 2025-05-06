import { splitProps } from 'solid-js';

export interface FieldTypeSelectAiProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeSelectAi(props: FieldTypeSelectAiProps) {
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
      <g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M4.5 2.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.5M8.5 4.5h4M5.5 8.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2.5"/><path stroke="currentColor" d="m4 4 1 1 2-2"/><path stroke="#AB0A83" d="M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3"/></g>
    </svg>
  );
}