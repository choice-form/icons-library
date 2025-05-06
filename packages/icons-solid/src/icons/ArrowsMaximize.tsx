import { splitProps } from 'solid-js';

export interface ArrowsMaximizeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ArrowsMaximize(props: ArrowsMaximizeProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.5 1.5 9 6m4.5-4.5H9m4.5 0V6m-12 7.5L6 9m-4.5 4.5H6m-4.5 0V9"/>
    </svg>
  );
}