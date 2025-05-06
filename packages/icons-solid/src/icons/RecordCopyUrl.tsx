import { splitProps } from 'solid-js';

export interface RecordCopyUrlProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RecordCopyUrl(props: RecordCopyUrlProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 10.5v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2"/><path d="m10 3 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828l-1.879 1.879a1 1 0 0 1-1.414 0L9 7m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L10 6"/></g>
    </svg>
  );
}