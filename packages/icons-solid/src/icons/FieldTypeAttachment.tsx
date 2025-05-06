import { splitProps } from 'solid-js';

export interface FieldTypeAttachmentProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeAttachment(props: FieldTypeAttachmentProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 2.5h.086a1 1 0 0 1 .707.293l1.914 1.914a1 1 0 0 1 .293.707V5.5m-3-3h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6m-3-3V5a.5.5 0 0 0 .5.5h2.5"/>
    </svg>
  );
}