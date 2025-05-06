import { splitProps } from 'solid-js';

export interface ThumbDownProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ThumbDown(props: ThumbDownProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 2.5h-2v5h2M4.5 7.5l2 6H7A1.5 1.5 0 0 0 8.5 12V9.5h3.27a1.5 1.5 0 0 0 1.485-1.712l-.571-4A1.5 1.5 0 0 0 11.2 2.5H4.5z"/></g>
    </svg>
  );
}