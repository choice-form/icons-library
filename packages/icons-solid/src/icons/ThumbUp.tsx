import { splitProps } from 'solid-js';

export interface ThumbUpProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ThumbUp(props: ThumbUpProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 13.5h-2v-5h2M4.5 8.5l2-6H7A1.5 1.5 0 0 1 8.5 4v2.5h3.27a1.5 1.5 0 0 1 1.485 1.712l-.571 4A1.5 1.5 0 0 1 11.2 13.5H4.5z"/></g>
    </svg>
  );
}