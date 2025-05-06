import { splitProps } from 'solid-js';

export interface StatementProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Statement(props: StatementProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 1.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a.5.5 0 0 1 .5.5v1.5l2.874-1.916a.5.5 0 0 1 .277-.084H12.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M6.5 4.5h-2v2h2z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 6.5v-2h-2v2zm0 0c0 2-2 2-2 2"/><path fill="currentColor" fill-opacity=".25" d="M10.5 4.5h-2v2h2z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5v-2h-2v2zm0 0c0 2-2 2-2 2"/>
    </svg>
  );
}