import { splitProps } from 'solid-js';

export interface RecordColorProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RecordColor(props: RecordColorProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="M13.5 12.5a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 2.5 3 3m7 7a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2m-6-11L2.207 6.793a1 1 0 0 0 0 1.414l4.086 4.086a1 1 0 0 0 1.414 0L13 7zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
    </svg>
  );
}