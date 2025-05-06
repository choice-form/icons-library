import { splitProps } from 'solid-js';

export interface StylesProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Styles(props: StylesProps) {
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
      <g stroke="currentColor"><path d="M6.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM6.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/></g>
    </svg>
  );
}