import { splitProps } from 'solid-js';

export interface FieldEditProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldEdit(props: FieldEditProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="M5.5 12.5v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 8.5v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3m-11-3v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M7.5 14.5l1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5z"/>
    </svg>
  );
}