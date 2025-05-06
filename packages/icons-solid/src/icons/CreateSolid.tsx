import { splitProps } from 'solid-js';

export interface CreateSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CreateSolid(props: CreateSolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M10.44 1.854a1.5 1.5 0 0 1 2.12 0l.586.585a1.5 1.5 0 0 1 0 2.122l-.792.793a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708zM8.145 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.196.12l-3 1a.5.5 0 0 1-.632-.632l1-3a.5.5 0 0 1 .12-.196z" clip-rule="evenodd"/>
    </svg>
  );
}