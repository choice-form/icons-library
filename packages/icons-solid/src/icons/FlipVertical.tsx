import { splitProps } from 'solid-js';

export interface FlipVerticalProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FlipVertical(props: FlipVerticalProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 7.5h-10m8-5-3 3-3-3zm-6 10 3-3 3 3z"/>
    </svg>
  );
}