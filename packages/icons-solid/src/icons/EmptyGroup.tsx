import { splitProps } from 'solid-js';

export interface EmptyGroupProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyGroup(props: EmptyGroupProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M1.5 6.5v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2"/><path stroke-linejoin="round" d="m3.5 6.5 1 1 2-2m2 1h3M13.5 14.5v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2"/><path stroke-linejoin="round" d="m3.5 14.5 1 1 2-2m2 1h3"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g>
    </svg>
  );
}