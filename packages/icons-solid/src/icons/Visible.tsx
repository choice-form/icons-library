import { splitProps } from 'solid-js';

export interface VisibleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Visible(props: VisibleProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8.576C12.873 6.237 10.5 4.5 8 4.5S3.127 6.237 2.5 8.576"/><path fill="currentColor" d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}