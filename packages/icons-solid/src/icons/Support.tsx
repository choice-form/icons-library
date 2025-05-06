import { splitProps } from 'solid-js';

export interface SupportProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Support(props: SupportProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.379 5.379a3 3 0 0 0 0 4.242l-2.122 2.122a6 6 0 0 1 0-8.486zM9.621 9.621a3 3 0 0 0 0-4.242l2.122-2.122a6 6 0 0 1 0 8.486z"/>
    </svg>
  );
}