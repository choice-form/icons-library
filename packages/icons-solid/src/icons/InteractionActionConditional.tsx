import { splitProps } from 'solid-js';

export interface InteractionActionConditionalProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionActionConditional(props: InteractionActionConditionalProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3.5 10.5 2 2m0-2-2 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 8.5v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1m-3-5v3"/></g>
    </svg>
  );
}