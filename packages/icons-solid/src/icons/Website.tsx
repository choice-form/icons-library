import { splitProps } from 'solid-js';

export interface WebsiteProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Website(props: WebsiteProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M7.5 1.5c-3 3-3 9 0 12M7.5 1.5c3 3 3 9 0 12M2 5.5h11m-11 4h11"/></g>
    </svg>
  );
}