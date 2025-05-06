import { splitProps } from 'solid-js';

export interface ActionWaitForSomeTimeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionWaitForSomeTime(props: ActionWaitForSomeTimeProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 8.5a5 5 0 1 1-5-5"/><path stroke-opacity=".25" d="M9.5 3.916A5.02 5.02 0 0 1 12.084 6.5"/><path d="M7.5 6.5v2l-2 2M7.5 3.5v-2m-2 0h4"/></g>
    </svg>
  );
}