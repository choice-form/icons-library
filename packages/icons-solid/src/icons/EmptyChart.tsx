import { splitProps } from 'solid-js';

export interface EmptyChartProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyChart(props: EmptyChartProps) {
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
      <g stroke="currentColor"><path stroke-linecap="round" d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path fill="currentColor" fill-opacity=".25" stroke-linecap="round" stroke-linejoin="round" d="M8 4.5H7a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"/><path stroke-linejoin="round" d="M3 7.5H2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5ZM13 5.5h-1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M.5 15.5h14"/></g>
    </svg>
  );
}