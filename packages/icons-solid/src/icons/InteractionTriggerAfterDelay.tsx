import { splitProps } from 'solid-js';

export interface InteractionTriggerAfterDelayProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionTriggerAfterDelay(props: InteractionTriggerAfterDelayProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 2.5h2m-1 6L9 7m2.5 1.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </svg>
  );
}