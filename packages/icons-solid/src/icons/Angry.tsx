import { splitProps } from 'solid-js';

export interface AngryProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Angry(props: AngryProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"/><path d="M10 9.5H6a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3M4.5 5.5l2 1M11.5 5.5l-2 1"/></g>
    </svg>
  );
}