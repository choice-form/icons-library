import { splitProps } from 'solid-js';

export interface OrganizationAddProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function OrganizationAdd(props: OrganizationAddProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 4.5v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2m-2 1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 10.5h-4m2 2v-4M4.5 7.5h.005m-.005 2h.005m-.005 2h.005M9.5 3.5h.005m1.995 0h.005"/></g>
    </svg>
  );
}