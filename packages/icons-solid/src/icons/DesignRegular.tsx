import { splitProps } from 'solid-js';

export interface DesignRegularProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function DesignRegular(props: DesignRegularProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M11 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path d="M7.502 1.5c-3.3 0-6.002 2.7-6.002 6s2.701 6 6.002 6c.556 0 .99-.448.99-1.013 0-.539-.526-.81-.526-1.35-.02-1.192 1.41-1 2.2-1A3.346 3.346 0 0 0 13.5 6.803C13.484 3.907 10.78 1.5 7.502 1.5"/></g>
    </svg>
  );
}