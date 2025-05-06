import { splitProps } from 'solid-js';

export interface LogicRegularProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function LogicRegular(props: LogicRegularProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M3.5 11.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-2M3.5 3.5v3"/></g>
    </svg>
  );
}