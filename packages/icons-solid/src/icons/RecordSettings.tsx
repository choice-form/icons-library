import { splitProps } from 'solid-js';

export interface RecordSettingsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RecordSettings(props: RecordSettingsProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4.5 2.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707M3.086 5.914l-.707.707m3.535-.707.707.707M3.086 3.086l-.707-.707"/><path fill="currentColor" fill-opacity=".25" d="M14.5 13.5v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 3.5h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4m-7 4v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1"/>
    </svg>
  );
}