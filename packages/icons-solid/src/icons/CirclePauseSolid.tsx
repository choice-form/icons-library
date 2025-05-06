import { splitProps } from 'solid-js';

export interface CirclePauseSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CirclePauseSolid(props: CirclePauseSolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8M7 6a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"/>
    </svg>
  );
}