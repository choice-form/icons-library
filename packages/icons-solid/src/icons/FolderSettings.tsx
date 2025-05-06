import { splitProps } from 'solid-js';

export interface FolderSettingsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FolderSettings(props: FolderSettingsProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 7.5v-2a1 1 0 0 0-1-1H6.914a1 1 0 0 1-.707-.293L4.793 2.793a1 1 0 0 0-.707-.293H2.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4"/><path d="M11.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 9.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707"/></g>
    </svg>
  );
}