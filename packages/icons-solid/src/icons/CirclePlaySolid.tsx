import { splitProps } from 'solid-js';

export interface CirclePlaySolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CirclePlaySolid(props: CirclePlaySolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8m6.528-2.882a1 1 0 0 1 1.027.05l2.99 1.993a1 1 0 0 1 0 1.678l-2.99 1.993A1 1 0 0 1 6 10V6a1 1 0 0 1 .528-.882" clip-rule="evenodd"/>
    </svg>
  );
}