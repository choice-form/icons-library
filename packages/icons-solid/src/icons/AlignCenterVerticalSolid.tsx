import { splitProps } from 'solid-js';

export interface AlignCenterVerticalSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AlignCenterVerticalSolid(props: AlignCenterVerticalSolidProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5h2m2 0h2m2 0h2"/><path fill="currentColor" d="M4.5 11.5v-8h2v8zM10.5 9.5h-2v-4h2z"/></g>
    </svg>
  );
}