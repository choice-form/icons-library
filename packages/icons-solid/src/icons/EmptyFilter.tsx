import { splitProps } from 'solid-js';

export interface EmptyFilterProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyFilter(props: EmptyFilterProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M7.5 4.5c-3.5 0-4 1-4 1s.5 1 4 1 4-1 4-1-.5-1-4-1"/><path stroke-linejoin="round" d="M2.5 6.5v.172a2 2 0 0 0 .586 1.414l3.121 3.121a1 1 0 0 1 .293.707V14.5l2 1v-3.586a1 1 0 0 1 .293-.707l3.121-3.121a2 2 0 0 0 .586-1.414V6.5"/></g>
    </svg>
  );
}