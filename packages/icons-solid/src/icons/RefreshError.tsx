import { splitProps } from 'solid-js';

export interface RefreshErrorProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RefreshError(props: RefreshErrorProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="m12.25 9.25 2.25 1.25-5 4 1.25-3.75L8.5 9.5l5-4z"/><path d="M10.036 3.964A5 5 0 1 0 7.5 12.4"/><path stroke-linejoin="round" d="M7.5 4.5h3v-3"/></g>
    </svg>
  );
}