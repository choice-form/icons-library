import { splitProps } from 'solid-js';

export interface MinWidthProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function MinWidth(props: MinWidthProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5h3m0 0L4 6m1.5 1.5L4 9m8.5-1.5h-3m0 0L11 9M9.5 7.5 11 6M7.5 2.5v10"/>
    </svg>
  );
}