import { splitProps } from 'solid-js';

export interface DoubleLineProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function DoubleLine(props: DoubleLineProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M5.5 8.5l2-2 3 3 3-3M6.5 10.5l1-1M10 6l3.5-3.5"/></g>
    </svg>
  );
}