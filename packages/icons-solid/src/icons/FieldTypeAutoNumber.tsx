import { splitProps } from 'solid-js';

export interface FieldTypeAutoNumberProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeAutoNumber(props: FieldTypeAutoNumberProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3.5 1-1v4M3 9.5s0-1 1-1 1 1 1 1c0 .5-.5 1-1 1.5-1.5 1.5-1 1.5-1 1.5h2M10 12.5 7.5 10m2.5 2.5 2.5-2.5M10 12.5v-10"/></g>
    </svg>
  );
}