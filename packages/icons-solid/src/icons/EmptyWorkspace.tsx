import { splitProps } from 'solid-js';

export interface EmptyWorkspaceProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyWorkspace(props: EmptyWorkspaceProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M15 7.5H1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5"/><path d="M1.5 9.5v6m8-6v2m0 0V15a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.5m-5 0h5m0-2v2M12.5 7.5l2.646-2.646a.5.5 0 0 0 0-.708L11.854.854a.5.5 0 0 0-.708 0L10 2"/><path fill="currentColor" fill-opacity=".25" d="m6 2 4 4a2.828 2.828 0 1 0-4-4"/></g>
    </svg>
  );
}