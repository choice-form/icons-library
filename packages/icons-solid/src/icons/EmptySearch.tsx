import { splitProps } from 'solid-js';

export interface EmptySearchProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptySearch(props: EmptySearchProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 6.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M4.5 4.5c0-2.5 4-2.5 4 0 0 2-2 1-2 3M15.5 15.5l-3-3M6.505 9.5v1"/></g>
    </svg>
  );
}