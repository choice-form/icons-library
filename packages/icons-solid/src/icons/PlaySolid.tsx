import { splitProps } from 'solid-js';

export interface PlaySolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function PlaySolid(props: PlaySolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M4.249 3.068a.5.5 0 0 1 .5-.002l7 4a.5.5 0 0 1 0 .868l-7 4A.5.5 0 0 1 4 11.5v-8a.5.5 0 0 1 .249-.432" clip-rule="evenodd"/>
    </svg>
  );
}