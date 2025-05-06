import { splitProps } from 'solid-js';

export interface EmptyOrganizationsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyOrganizations(props: EmptyOrganizationsProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M10.5 5.5v-4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h5"/><path stroke-linejoin="round" d="M4 2.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M8 2.5H7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M4 6.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M4 10.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M7.5 11.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/><path d="M11.5 9.5v2"/><path stroke-linejoin="round" d="M11.5 13.5h.005M8 6.5H7a.5.5 0 0 0-.5.5v1"/></g>
    </svg>
  );
}