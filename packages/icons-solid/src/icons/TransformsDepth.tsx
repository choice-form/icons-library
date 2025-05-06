import { splitProps } from 'solid-js';

export interface TransformsDepthProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TransformsDepth(props: TransformsDepthProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path d="M4.5 5.5v6h6M4.5 11.5l3-3"/></g>
    </svg>
  );
}