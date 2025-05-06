import { splitProps } from 'solid-js';

export interface AppearanceProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Appearance(props: AppearanceProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 1.5h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5"/><path fill="currentColor" fill-opacity=".25" d="M7.5 1.5h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4z"/><path d="M4.5 4.5h1m-1 3h1m-1 3h1"/></g>
    </svg>
  );
}