import { splitProps } from 'solid-js';

export interface WorkspaceTemplateConvertProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WorkspaceTemplateConvert(props: WorkspaceTemplateConvertProps) {
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
      <g stroke="currentColor"><path stroke-linecap="round" d="M5.5 12.5h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 12.5H12A2.5 2.5 0 0 0 13.5 8m-2-.5H10A2.5 2.5 0 0 0 8.5 12"/><path stroke-linecap="round" stroke-linejoin="round" d="m12.5 10.5-2 2 2 2M9.5 5.5l2 2-2 2"/></g>
    </svg>
  );
}