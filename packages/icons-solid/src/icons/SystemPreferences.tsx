import { splitProps } from 'solid-js';

export interface SystemPreferencesProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function SystemPreferences(props: SystemPreferencesProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 13.5v-2M4.5 5.5v-3M4.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 2.5v2M11.5 10.5v3M11.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
    </svg>
  );
}