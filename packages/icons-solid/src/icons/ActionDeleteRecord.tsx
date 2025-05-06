import { splitProps } from 'solid-js';

export interface ActionDeleteRecordProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionDeleteRecord(props: ActionDeleteRecordProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M7.5 10.5h-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/></g>
    </svg>
  );
}