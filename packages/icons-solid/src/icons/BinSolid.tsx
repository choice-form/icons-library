import { splitProps } from 'solid-js';

export interface BinSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function BinSolid(props: BinSolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M6 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2h3zM4.118 7.177A.5.5 0 0 1 4.5 7h7a.5.5 0 0 1 .493.582l-.86 5.165A1.5 1.5 0 0 1 9.653 14H6.347a1.5 1.5 0 0 1-1.48-1.253l-.86-5.165a.5.5 0 0 1 .111-.405" clip-rule="evenodd"/>
    </svg>
  );
}