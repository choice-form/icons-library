import { splitProps } from 'solid-js';

export interface MinimizeUiProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function MinimizeUi(props: MinimizeUiProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M12.6 2.5H3.4a.9.9 0 0 0-.9.9v8.2a.9.9 0 0 0 .9.9h9.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/><path d="M6.5 4.5v6"/></g>
    </svg>
  );
}