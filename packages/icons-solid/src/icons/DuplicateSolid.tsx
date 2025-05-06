import { splitProps } from 'solid-js';

export interface DuplicateSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function DuplicateSolid(props: DuplicateSolidProps) {
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
      <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6.5a.5.5 0 0 1-.5-.5z"/><path d="M2 7a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .5.5V10h3.5a.5.5 0 0 1 .5.5V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/></g>
    </svg>
  );
}