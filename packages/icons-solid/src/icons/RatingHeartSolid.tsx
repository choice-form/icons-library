import { splitProps } from 'solid-js';

export interface RatingHeartSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RatingHeartSolid(props: RatingHeartSolidProps) {
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
      <path fill="currentColor" d="M11 2a3.94 3.94 0 0 0-3 1.371A3.94 3.94 0 0 0 5 2a4 4 0 0 0-2.865 6.785l5.508 5.629a.5.5 0 0 0 .715-.001l5.315-5.454A3.988 3.988 0 0 0 11 2"/>
    </svg>
  );
}