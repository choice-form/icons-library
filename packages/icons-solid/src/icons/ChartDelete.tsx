import { splitProps } from 'solid-js';

export interface ChartDeleteProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ChartDelete(props: ChartDeleteProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13 11.5h-3M14.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1.5 12.5h2m0 0h3m-3 0v-11m0 11v2m2-4V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5m2-1V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5"/></g>
    </svg>
  );
}