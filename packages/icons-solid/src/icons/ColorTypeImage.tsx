import { splitProps } from 'solid-js';

export interface ColorTypeImageProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ColorTypeImage(props: ColorTypeImageProps) {
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
      <g stroke="currentColor"><path d="M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path stroke-linejoin="round" d="m2.5 10 3.146-3.146a.5.5 0 0 1 .708 0L11.5 12"/><path d="M8.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></g>
    </svg>
  );
}