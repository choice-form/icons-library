import { splitProps } from 'solid-js';

export interface FieldSettingsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldSettings(props: FieldSettingsProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 9.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707"/><path fill="currentColor" fill-opacity=".25" d="M10.5 2.5v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m7 6v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"/>
    </svg>
  );
}