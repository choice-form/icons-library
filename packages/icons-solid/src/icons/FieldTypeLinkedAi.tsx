import { splitProps } from 'solid-js';

export interface FieldTypeLinkedAiProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeLinkedAi(props: FieldTypeLinkedAiProps) {
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
      <g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M3.5 3.5h9m-9 8h2M2.5 7.5h5m0 0-2-2m2 2-2 2"/><path stroke="#AB0A83" d="M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3"/></g>
    </svg>
  );
}