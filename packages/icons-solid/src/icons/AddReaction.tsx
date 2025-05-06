import { splitProps } from 'solid-js';

export interface AddReactionProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AddReaction(props: AddReactionProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 13.5a6 6 0 1 1 6-6m-4 2.236a3 3 0 0 1-2 .764 3 3 0 0 1-2-.764m0-3.236h.005m3.995 0h.005M14.268 14.268l-3.536-3.536m0 3.536 3.536-3.536"/></g>
    </svg>
  );
}