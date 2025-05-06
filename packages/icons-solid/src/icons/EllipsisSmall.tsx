import { splitProps } from 'solid-js';

export interface EllipsisSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EllipsisSmall(props: EllipsisSmallProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g>
    </svg>
  );
}