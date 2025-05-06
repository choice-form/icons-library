import { splitProps } from 'solid-js';

export interface RowGroupProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RowGroup(props: RowGroupProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M12.5 7v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5"/><path d="M3 12.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M2.5 3v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5"/></g>
    </svg>
  );
}