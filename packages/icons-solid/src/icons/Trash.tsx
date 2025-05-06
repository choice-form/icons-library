import { splitProps } from 'solid-js';

export interface TrashProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Trash(props: TrashProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 3.5h2m0 0v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9m-8 0h2m8 0h-2m0 0h-2m-4 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1m-4 0h4"/>
    </svg>
  );
}