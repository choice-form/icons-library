import { splitProps } from 'solid-js';

export interface InteractionTriggerOnClickProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionTriggerOnClick(props: InteractionTriggerOnClickProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 2.5 5.5 4M4 5.5 2.5 5m6-1.5-1 1m-3 3-1 1M6 6l2.5 6.5 1-3 3-1z"/>
    </svg>
  );
}