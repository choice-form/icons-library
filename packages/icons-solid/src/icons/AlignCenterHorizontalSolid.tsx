import { splitProps } from 'solid-js';

export interface AlignCenterHorizontalSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AlignCenterHorizontalSolid(props: AlignCenterHorizontalSolidProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 2.5v2m0 2v2m0 2v2"/><path fill="currentColor" d="M3.5 4.5h8v2h-8zM5.5 10.5v-2h4v2z"/></g>
    </svg>
  );
}