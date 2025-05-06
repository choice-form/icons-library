import { splitProps } from 'solid-js';

export interface RadiusAllProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RadiusAll(props: RadiusAllProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12.5h1a2 2 0 0 0 2-2v-1m-7 3h-1a2 2 0 0 1-2-2v-1m0-4v-1a2 2 0 0 1 2-2h1m4 0h1a2 2 0 0 1 2 2v1"/>
    </svg>
  );
}