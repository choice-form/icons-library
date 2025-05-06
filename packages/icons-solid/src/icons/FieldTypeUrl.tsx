import { splitProps } from 'solid-js';

export interface FieldTypeUrlProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeUrl(props: FieldTypeUrlProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 4 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828L9.207 8.793a1 1 0 0 1-1.414 0L7 8m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L8 7"/>
    </svg>
  );
}