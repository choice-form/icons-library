import { splitProps } from 'solid-js';

export interface InteractionActionSetVariableModeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionActionSetVariableMode(props: InteractionActionSetVariableModeProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 10.5a2 2 0 0 1-4 0v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"/><path d="M10.35 8.5h1.15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6M5.5 10.5h.005"/><path d="m7.5 6 1.15-1.15a1.2 1.2 0 0 1 1.702.002l.948.948a1.2 1.2 0 0 1 .013 1.717L6.95 11.9"/></g>
    </svg>
  );
}