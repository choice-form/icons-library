import { splitProps } from 'solid-js';

export interface DeleteReactionProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function DeleteReaction(props: DeleteReactionProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 13.5a6 6 0 1 1 6-6m-4 2.236a3 3 0 0 1-2 .764 3 3 0 0 1-2-.764M15 12.5h-5m2.5 2.5v-5m-7-3.5h.005m3.995 0h.005"/>
    </svg>
  );
}