import { splitProps } from 'solid-js';

export interface RoleAddProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RoleAdd(props: RoleAddProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.793 9.793 9 9l-1.5 1.5h-1v1h-1v1l-1 1h-2v-2L7 7l-.793-.793a1 1 0 0 1 0-1.414l1.879-1.879a2 2 0 0 1 2.828 0L13.5 5.5a1.414 1.414 0 0 1 0 2M9.5 4.5l2 2M14.5 11.5h-4m2 2v-4"/></g>
    </svg>
  );
}