import { splitProps } from 'solid-js';

export interface SystemProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function System(props: SystemProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 3.5s1 2 6 2 6-2 6-2-1-2-6-2-6 2-6 2"/><path d="M13.5 3.5v8s-1 2-6 2-6-2-6-2v-8"/><path d="M13.5 7.5s-1 2-6 2-6-2-6-2"/></g>
    </svg>
  );
}