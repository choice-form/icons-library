import { splitProps } from 'solid-js';

export interface ToolbarScreenAspectHorizontalSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarScreenAspectHorizontalSolid(props: ToolbarScreenAspectHorizontalSolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M3 2.5A2.5 2.5 0 0 1 5.5 0h5A2.5 2.5 0 0 1 13 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 13.5z" clip-rule="evenodd"/>
    </svg>
  );
}