import { splitProps } from 'solid-js';

export interface NotificationsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Notifications(props: NotificationsProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 7.5c0 2.035-.92 2.69-1.513 2.9-.26.093-.487.324-.487.6a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5c0-.276-.227-.507-.488-.6-.591-.21-1.512-.865-1.512-2.9 0-3.04-2.822-4.5-3.725-4.89a.76.76 0 0 0-.557-.022C6.306 2.904 3.5 4.15 3.5 7.5M7.5 2.5v-1"/><path fill="currentColor" fill-opacity=".25" d="M9.5 11.5a2 2 0 1 1-4 0z"/></g>
    </svg>
  );
}