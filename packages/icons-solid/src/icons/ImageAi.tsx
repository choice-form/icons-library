import { splitProps } from 'solid-js';

export interface ImageAiProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ImageAi(props: ImageAiProps) {
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
      <g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M4.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" d="M12.5 8.5v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4"/><path stroke="currentColor" d="m2 13 2.5-2.5L6 12l3.5-3.5"/><path fill="#AB0A83" stroke="#AB0A83" d="M10.5 3.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2"/></g>
    </svg>
  );
}