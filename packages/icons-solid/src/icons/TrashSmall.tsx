import { splitProps } from 'solid-js';

export interface TrashSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TrashSmall(props: TrashSmallProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h9m-1 0v7c0 .5-.5 1-1 1h-5c-.5 0-1-.5-1-1v-7m1.5 0v-1c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v1"/>
    </svg>
  );
}