import { splitProps } from 'solid-js';

export interface CircleCirclehecirclekProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CircleCirclehecirclek(props: CircleCirclehecirclekProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8.5 2 2 4-5"/><path d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/></g>
    </svg>
  );
}