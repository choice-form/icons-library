import { splitProps } from 'solid-js';

export interface FitScreenProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FitScreen(props: FitScreenProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 4.5v-1a1 1 0 0 0-1-1h-1m2 8v1a1 1 0 0 1-1 1h-1m-8-2v1a1 1 0 0 0 1 1h1m-2-8v-1a1 1 0 0 1 1-1h1"/>
    </svg>
  );
}