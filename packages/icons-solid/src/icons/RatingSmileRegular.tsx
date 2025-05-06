import { splitProps } from 'solid-js';

export interface RatingSmileRegularProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RatingSmileRegular(props: RatingSmileRegularProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"/><path fill="currentColor" d="M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 9.8a3.5 3.5 0 0 1-6 0"/>
    </svg>
  );
}