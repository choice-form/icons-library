import { splitProps } from 'solid-js';

export interface CircleCheckLargeSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CircleCheckLargeSolid(props: CircleCheckLargeSolidProps) {
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
      <path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L7 8.586l3.293-3.293a.999.999 0 1 1 1.414 1.414"/>
    </svg>
  );
}