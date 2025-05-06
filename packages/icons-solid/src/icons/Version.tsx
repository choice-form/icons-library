import { splitProps } from 'solid-js';

export interface VersionProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Version(props: VersionProps) {
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
      <g stroke="currentColor" stroke-linejoin="round"><path d="m7.5 1.5-6 3 6 3 6-3z"/><path stroke-linecap="round" d="m1.5 7.5 6 3 6-3M1.5 10.5l6 3 6-3"/></g>
    </svg>
  );
}