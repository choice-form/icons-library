import { splitProps } from 'solid-js';

export interface LinkedAddProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function LinkedAdd(props: LinkedAddProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 6.5h7m0 0-2-2m2 2-2 2M13.5 11.5h-4m2 2v-4M2.5 1.5h11m-11 10h4m5-5h2"/></g>
    </svg>
  );
}