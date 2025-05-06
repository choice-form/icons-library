import { splitProps } from 'solid-js';

export interface InteractionTriggerMouseEnterProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionTriggerMouseEnter(props: InteractionTriggerMouseEnterProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 5.5v-1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1m2-2h5m0 0-2-2m2 2-2 2"/>
    </svg>
  );
}