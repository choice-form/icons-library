import { splitProps } from 'solid-js';

export interface CircleSkipSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CircleSkipSolid(props: CircleSkipSolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.207 4.793a1 1 0 0 0-1.414 1.414l.793.793H7a1 1 0 0 0 0 2h3.586l-.793.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414zM3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"/>
    </svg>
  );
}