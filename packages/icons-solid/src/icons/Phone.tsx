import { splitProps } from 'solid-js';

export interface PhoneProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Phone(props: PhoneProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 1.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-5"/><path d="M5.5 12a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M13.5 1.5h-6a1 1 0 0 0-1 1v6l3-2h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/></g>
    </svg>
  );
}