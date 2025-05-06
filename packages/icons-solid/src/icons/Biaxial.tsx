import { splitProps } from 'solid-js';

export interface BiaxialProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Biaxial(props: BiaxialProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m4-4H8a.5.5 0 0 0 .5-.5v-.5m-2-4V3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5m2.5 7h1a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M13.5 1.5l-8 8"/></g>
    </svg>
  );
}