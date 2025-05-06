import { splitProps } from 'solid-js';

export interface ActionGetOneRecordFromLinkedRecordsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionGetOneRecordFromLinkedRecords(props: ActionGetOneRecordFromLinkedRecordsProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 5.5h4"/><path fill="currentColor" fill-opacity=".25" d="M10.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.5 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path d="M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 7.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1"/></g>
    </svg>
  );
}