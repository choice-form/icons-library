import { splitProps } from 'solid-js';

export interface InteractionTriggerOnDragProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function InteractionTriggerOnDrag(props: InteractionTriggerOnDragProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 2.5-2 2m2-2h-2m2 0v2m-5 3-2 2m0 0v-2m0 2h2m0-5-2-2m0 0v2m0-2h2M6 6l2.5 6.5 1-3 3-1z"/>
    </svg>
  );
}