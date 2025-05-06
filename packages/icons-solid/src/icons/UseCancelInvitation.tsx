import { splitProps } from 'solid-js';

export interface UseCancelInvitationProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function UseCancelInvitation(props: UseCancelInvitationProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M12.5 4.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M14.5 13.5v-1a3 3 0 0 0-3-3M8.5 9.5l2 2m0 0-2 2m2-2h-4m-5 0h1"/><path d="m6.5 8.5-4 6"/></g>
    </svg>
  );
}