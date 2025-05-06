import { splitProps } from 'solid-js';

export interface DownloadProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Download(props: DownloadProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 5.5H4A1.5 1.5 0 0 0 2.5 7v4A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.5"/><path d="m11 7.5-3 3-3-3M8 2.5v8"/></g>
    </svg>
  );
}