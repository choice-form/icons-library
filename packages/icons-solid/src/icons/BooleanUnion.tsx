import { splitProps } from 'solid-js';

export interface BooleanUnionProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function BooleanUnion(props: BooleanUnionProps) {
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
      <path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3a1 1 0 0 0-1-1"/>
    </svg>
  );
}