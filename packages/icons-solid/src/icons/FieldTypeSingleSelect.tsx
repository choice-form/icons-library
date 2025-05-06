import { splitProps } from 'solid-js';

export interface FieldTypeSingleSelectProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeSingleSelect(props: FieldTypeSingleSelectProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M8.5 4.5h4m-4 6h4M2.5 10.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4.5 4.5h.005"/></g>
    </svg>
  );
}