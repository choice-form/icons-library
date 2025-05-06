import { splitProps } from 'solid-js';

export interface InteractionActionSwapOverlayProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionActionSwapOverlay(props: InteractionActionSwapOverlayProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5h10m-10 0L4 6M2.5 7.5 4 9m8.5-1.5L11 6m1.5 1.5L11 9M2.5 2.5h3a1 1 0 0 1 1 1v2m0 4v2a1 1 0 0 1-1 1h-3m6-7v-2a1 1 0 0 1 1-1h3m-4 7v2a1 1 0 0 0 1 1h3"/></g>
    </svg>
  );
}