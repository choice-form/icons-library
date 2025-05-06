import { splitProps } from 'solid-js';

export interface CentralizeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Centralize(props: CentralizeProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 2.5-3 3m0 0H12m-2.5 0V3m-7 9.5 3-3m0 0H3m2.5 0V12m-3-9.5 3 3m0 0V3m0 2.5H3m9.5 7-3-3m0 0V12m0-2.5H12"/>
    </svg>
  );
}