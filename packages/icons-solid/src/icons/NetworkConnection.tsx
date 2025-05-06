import { splitProps } from 'solid-js';

export interface NetworkConnectionProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function NetworkConnection(props: NetworkConnectionProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.713 5.394 6.288 7.106M9.713 10.606 6.288 8.894M11.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
    </svg>
  );
}