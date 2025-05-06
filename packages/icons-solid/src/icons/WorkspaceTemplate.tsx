import { splitProps } from 'solid-js';

export interface WorkspaceTemplateProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WorkspaceTemplate(props: WorkspaceTemplateProps) {
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
      <g stroke="currentColor"><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1Z"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3zM11.5 8.5h-3v3h3z"/></g>
    </svg>
  );
}