import { splitProps } from 'solid-js';

export interface InteractionActionOpenOverlayProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionActionOpenOverlay(props: InteractionActionOpenOverlayProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10.5 9.5h-2m1 1v-2"/><path d="M10.5 6.5v-3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3"/></g>
    </svg>
  );
}