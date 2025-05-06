import { splitProps } from 'solid-js';

export interface EmbedTypeSideTabProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmbedTypeSideTab(props: EmbedTypeSideTabProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M12 4.5h-2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"/><path d="M7.5 7v1"/></g>
    </svg>
  );
}