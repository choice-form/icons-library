import { splitProps } from 'solid-js';

export interface EmptyNotificationsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyNotifications(props: EmptyNotificationsProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M.5 13.5h14s-2.5-1.5-3-4c-.413-2.063-1.506-3.445-3-3.865V5.5a1 1 0 0 0-2 0v.135c-1.494.42-2.587 1.802-3 3.865-.5 2.5-3 4-3 4"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M9.5 13.5a2 2 0 1 1-4 0z"/></g>
    </svg>
  );
}