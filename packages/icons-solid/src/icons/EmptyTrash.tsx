import { splitProps } from 'solid-js';

export interface EmptyTrashProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyTrash(props: EmptyTrashProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M13 4.5H2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"/><path stroke-linejoin="round" d="m2.5 6.5.901 8.11a1 1 0 0 0 .994.89h6.21a1 1 0 0 0 .994-.89L12.5 6.5M7.5 8.5v5m2-5v5m-4-5v5"/></g>
    </svg>
  );
}