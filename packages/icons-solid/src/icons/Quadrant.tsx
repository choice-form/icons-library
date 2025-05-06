import { splitProps } from 'solid-js';

export interface QuadrantProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Quadrant(props: QuadrantProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 4.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2"/></g>
    </svg>
  );
}