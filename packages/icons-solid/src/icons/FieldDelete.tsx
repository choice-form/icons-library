import { splitProps } from 'solid-js';

export interface FieldDeleteProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldDelete(props: FieldDeleteProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 10.5h-4M9.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0M3.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m4 9h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4"/></g>
    </svg>
  );
}