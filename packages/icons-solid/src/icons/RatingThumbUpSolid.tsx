import { splitProps } from 'solid-js';

export interface RatingThumbUpSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RatingThumbUpSolid(props: RatingThumbUpSolidProps) {
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
      <g fill="currentColor"><path d="M2 7H1a.945.945 0 0 0-1 1v7a.945.945 0 0 0 1 1h1zM14 6H9V2a1.89 1.89 0 0 0-2-2L4 7v9h8a2.91 2.91 0 0 0 2.9-2.4l1-5.2A1.937 1.937 0 0 0 14 6"/></g>
    </svg>
  );
}