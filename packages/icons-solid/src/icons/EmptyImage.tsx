import { splitProps } from 'solid-js';

export interface EmptyImageProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyImage(props: EmptyImageProps) {
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
      <path stroke="currentColor" stroke-linecap="round" d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke="currentColor" d="M2.5 7.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path fill="currentColor" d="M6 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/><path stroke="currentColor" stroke-linejoin="round" d="m3 15 6.5-6.5 3 2"/>
    </svg>
  );
}