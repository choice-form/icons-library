import { splitProps } from 'solid-js';

export interface JourneyProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Journey(props: JourneyProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12m0 0-2-2m2 2-2 2m1 2v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-3M7.5 9.5v2m3-2v2m-6-2v2"/></g>
    </svg>
  );
}