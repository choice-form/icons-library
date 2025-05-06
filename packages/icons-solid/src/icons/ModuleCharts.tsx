import { splitProps } from 'solid-js';

export interface ModuleChartsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ModuleCharts(props: ModuleChartsProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="M5.5 10V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5M11 7.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m6.5-4h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5M7.5 10V4a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5"/>
    </svg>
  );
}