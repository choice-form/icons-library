import { splitProps } from 'solid-js';

export interface UploadDataProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function UploadData(props: UploadDataProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 7.5 8 3.5l-3.5 4h2v4h3v-4zM13.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5h-1.5M2.5 10.5V12A1.5 1.5 0 0 0 4 13.5h1.5M13.5 5.5V4A1.5 1.5 0 0 0 12 2.5h-1.5M2.5 5.5V4A1.5 1.5 0 0 1 4 2.5h1.5"/></g>
    </svg>
  );
}