import { splitProps } from 'solid-js';

export interface RecordInsertTopProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RecordInsertTop(props: RecordInsertTopProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 1.5 2 2m0 0-2 2m2-2h-3a2 2 0 0 0-2 2v2"/><path fill="currentColor" fill-opacity=".25" d="M12.5 10.5h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M13.5 3.5h-4m2 2v-4"/></g>
    </svg>
  );
}