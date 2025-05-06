import { splitProps } from 'solid-js';

export interface EmptyFileProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyFile(props: EmptyFileProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M3.5 15.5h8a1 1 0 0 0 1-1v-6l-4-4h-5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1M4.5 8.5h2m-2 3h6m-6 2h6"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="m12.5 8.5-4-4v3a1 1 0 0 0 1 1z"/></g>
    </svg>
  );
}