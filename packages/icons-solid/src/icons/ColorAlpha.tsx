import { splitProps } from 'solid-js';

export interface ColorAlphaProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ColorAlpha(props: ColorAlphaProps) {
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
      <path stroke="currentColor" d="M7.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path fill="currentColor" fill-opacity=".5" d="M3.964 11.036a5 5 0 1 0 7.072-7.072L7.5 7.5z"/>
    </svg>
  );
}