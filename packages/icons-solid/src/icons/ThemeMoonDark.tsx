import { splitProps } from 'solid-js';

export interface ThemeMoonDarkProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ThemeMoonDark(props: ThemeMoonDarkProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 9a4.5 4.5 0 0 0 8.247 2.493C6.5 11.493 3.5 7.5 6.253 4.507 3.711 4.367 1.5 6.449 1.5 9M7.5 2.5h2m-1-1v2M11.5 4.5v4m-2-2h4"/></g>
    </svg>
  );
}