import { splitProps } from 'solid-js';

export interface ToolbarScreenAspectHorizontalRegularProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarScreenAspectHorizontalRegular(props: ToolbarScreenAspectHorizontalRegularProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5.5h-5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2"/>
    </svg>
  );
}