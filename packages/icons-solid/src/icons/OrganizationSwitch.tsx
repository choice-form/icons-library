import { splitProps } from 'solid-js';

export interface OrganizationSwitchProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function OrganizationSwitch(props: OrganizationSwitchProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5H6A2.5 2.5 0 0 0 7.5 8m-2-.5H4A2.5 2.5 0 0 0 2.5 12"/><path d="m6.5 10.5-2 2 2 2M3.5 5.5l2 2-2 2M7.5 5.5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005"/></g>
    </svg>
  );
}