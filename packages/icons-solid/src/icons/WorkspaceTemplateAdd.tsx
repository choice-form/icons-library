import { splitProps } from 'solid-js';

export interface WorkspaceTemplateAddProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WorkspaceTemplateAdd(props: WorkspaceTemplateAddProps) {
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
      <g stroke="currentColor"><path stroke-linecap="round" d="M4.5 12.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 10.5h-4m2 2v-4"/></g>
    </svg>
  );
}