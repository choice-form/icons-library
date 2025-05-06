import { splitProps } from 'solid-js';

export interface AtSignProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AtSign(props: AtSignProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" clip-path="url(#a)"><path d="M8 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334"/><path d="M10.667 5.333v3.334a2 2 0 1 0 4 0V8A6.667 6.667 0 1 0 12 13.333"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>
    </svg>
  );
}