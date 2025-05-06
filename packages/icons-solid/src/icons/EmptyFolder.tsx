import { splitProps } from 'solid-js';

export interface EmptyFolderProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyFolder(props: EmptyFolderProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="m3.5 12.5.772-2.316a1 1 0 0 1 .949-.684H13.5m0 0a.72.72 0 0 1 .684.949l-1.456 4.367a1 1 0 0 1-.949.684H2.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1z"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g>
    </svg>
  );
}