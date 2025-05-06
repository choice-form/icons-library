import { splitProps } from 'solid-js';

export interface TargetProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Target(props: TargetProps) {
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
      <path stroke="currentColor" d="M12.5 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"/><path stroke="currentColor" d="M10 7.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/><path fill="currentColor" d="M8 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
    </svg>
  );
}