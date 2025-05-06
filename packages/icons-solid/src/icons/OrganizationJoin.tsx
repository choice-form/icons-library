import { splitProps } from 'solid-js';

export interface OrganizationJoinProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function OrganizationJoin(props: OrganizationJoinProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 13.5h3a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3m-2 0h-2a1 1 0 0 0-1 1v1m3 6h-2a1 1 0 0 1-1-1v-1M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005M7.5 7.5l2 2m0 0-2 2m2-2h-8"/></g>
    </svg>
  );
}