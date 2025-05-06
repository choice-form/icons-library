import { splitProps } from 'solid-js';

export interface BorderProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Border(props: BorderProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 3.5h10"/><path fill="currentColor" d="M12.5 6.5h-10v1h10zM12.5 10.5h-10v2h10z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5h-10v1h10zM12.5 10.5h-10v2h10z"/>
    </svg>
  );
}