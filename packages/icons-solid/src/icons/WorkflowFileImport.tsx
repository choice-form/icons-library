import { splitProps } from 'solid-js';

export interface WorkflowFileImportProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WorkflowFileImport(props: WorkflowFileImportProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1M14.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M8.5 7.5h3a1 1 0 0 1 1 1v2m-4-3v-3m0 3h-3a1 1 0 0 0-1 1v2M6.5 10.5l2 2m0 0-2 2m2-2h-7"/></g>
    </svg>
  );
}