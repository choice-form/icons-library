import { splitProps } from 'solid-js';

export interface ThemeSunBrightProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ThemeSunBright(props: ThemeSunBrightProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0M7.5 1.5v1m0 10v1m5-6h1m-11 0h-1M11.743 3.257l-.707.707m-7.072 7.072-.707.707m7.779-.707.707.707M3.964 3.964l-.707-.707"/></g>
    </svg>
  );
}