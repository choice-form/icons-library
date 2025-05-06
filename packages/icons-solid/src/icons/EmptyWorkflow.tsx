import { splitProps } from 'solid-js';

export interface EmptyWorkflowProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyWorkflow(props: EmptyWorkflowProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M10.5 4.5h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path stroke-linejoin="round" d="M5.5 6.5h4M6 12.5H1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5M14 12.5H9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M3.5 12.5v-1a1 1 0 0 1 1-1h3m0 0h3a1 1 0 0 1 1 1v1m-4-2v-2"/></g>
    </svg>
  );
}