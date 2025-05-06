import { splitProps } from 'solid-js';

export interface TrendLineProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TrendLine(props: TrendLineProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M12.5 2.5l-7 7m7-7v2m0-2h-2M9.5 8.5h4m0 0L12 7m1.5 1.5L12 10"/></g>
    </svg>
  );
}