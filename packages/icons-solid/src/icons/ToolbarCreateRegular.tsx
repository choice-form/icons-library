import { splitProps } from 'solid-js';

export interface ToolbarCreateRegularProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarCreateRegular(props: ToolbarCreateRegularProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1 15.5h14M9.793 1.207a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414l-7.597 7.597a1 1 0 0 1-.465.263L1 13l.933-3.731a1 1 0 0 1 .263-.465zM8.5 2.5l3 3"/></g>
    </svg>
  );
}