import { splitProps } from 'solid-js';

export interface MaxHeightProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function MaxHeight(props: MaxHeightProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 4.5v6m0-6L9 6M7.5 4.5 6 6m1.5 4.5L6 9m1.5 1.5L9 9M2.5 2.5h10m-10 10h10"/>
    </svg>
  );
}