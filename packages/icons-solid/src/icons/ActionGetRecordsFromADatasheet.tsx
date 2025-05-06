import { splitProps } from 'solid-js';

export interface ActionGetRecordsFromADatasheetProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionGetRecordsFromADatasheet(props: ActionGetRecordsFromADatasheetProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 12.5v1a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0 4v1M6.5 5.5h8m-6 5h6"/><path fill="currentColor" fill-opacity=".25" d="M4.5 4.5h2v2h-2zM4.5 9.5h2v2h-2z"/></g>
    </svg>
  );
}