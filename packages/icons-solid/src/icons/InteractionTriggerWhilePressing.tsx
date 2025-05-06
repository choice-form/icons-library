import { splitProps } from 'solid-js';

export interface InteractionTriggerWhilePressingProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionTriggerWhilePressing(props: InteractionTriggerWhilePressingProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427"/><path d="M6 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g>
    </svg>
  );
}