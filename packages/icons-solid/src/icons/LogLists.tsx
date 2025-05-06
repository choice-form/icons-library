import { splitProps } from 'solid-js';

export interface LogListsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function LogLists(props: LogListsProps) {
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
      <g stroke="currentColor"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"/><path d="M3.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/><path stroke-linecap="round" d="M7.5 5.5h4"/><path d="M3.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/><path stroke-linecap="round" d="M7.5 9.5h4"/></g>
    </svg>
  );
}