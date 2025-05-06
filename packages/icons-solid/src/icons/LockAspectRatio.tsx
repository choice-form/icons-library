import { splitProps } from 'solid-js';

export interface LockAspectRatioProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function LockAspectRatio(props: LockAspectRatioProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M10 10.5h1a2.5 2.5 0 0 0 0-5h-1m-4 0H5a2.5 2.5 0 0 0 0 5h1"/><path d="M5 8h6"/></g>
    </svg>
  );
}