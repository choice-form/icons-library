import { splitProps } from 'solid-js';

export interface WarningTriangleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WarningTriangle(props: WarningTriangleProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M7.5 5.5v4"/><path stroke-linejoin="round" d="M7.5 11.5h.005"/><path d="m1.862 12.776 5.19-10.382a.5.5 0 0 1 .895 0l5.191 10.382a.5.5 0 0 1-.447.724H2.309a.5.5 0 0 1-.447-.724Z"/></g>
    </svg>
  );
}