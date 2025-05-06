import { splitProps } from 'solid-js';

export interface ImageSettingsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ImageSettings(props: ImageSettingsProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 9.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path d="M12.5 6.5v-3a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/><path d="m2 11 2.5-2.5L6 10l3.5-3.5"/></g>
    </svg>
  );
}