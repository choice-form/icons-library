import { splitProps } from 'solid-js';

export interface FieldTypeArrayProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeArray(props: FieldTypeArrayProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1m6-8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1M4.5 7.5h.005M7.5 7.5h.005M10.5 7.5h.005"/></g>
    </svg>
  );
}