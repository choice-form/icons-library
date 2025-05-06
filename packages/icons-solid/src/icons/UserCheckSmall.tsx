import { splitProps } from 'solid-js';

export interface UserCheckSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function UserCheckSmall(props: UserCheckSmallProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10 7.5l1 1 2-2"/></g>
    </svg>
  );
}