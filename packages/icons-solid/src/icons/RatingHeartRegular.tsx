import { splitProps } from 'solid-js';

export interface RatingHeartRegularProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RatingHeartRegular(props: RatingHeartRegularProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 6A3.49 3.49 0 0 0 8 4.223a3.492 3.492 0 1 0-5.507 4.213L8 14.065l5.338-5.477A3.48 3.48 0 0 0 14.5 6"/>
    </svg>
  );
}