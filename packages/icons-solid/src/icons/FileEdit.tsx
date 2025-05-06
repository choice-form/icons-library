import { splitProps } from 'solid-js';

export interface FileEditProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FileEdit(props: FileEditProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"/><path fill="currentColor" fill-opacity=".25" d="m6.5 9.5 1-3 4.646-4.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L9.5 8.5z"/><path d="M9.5 10.5V12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5h.5"/></g>
    </svg>
  );
}