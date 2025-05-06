import { splitProps } from 'solid-js';

export interface ArrowMinimizeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ArrowMinimize(props: ArrowMinimizeProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M9.5 6.5 14 2M9.5 6.5H14m-4.5 0V2M6.5 9.5 2 14m4.5-4.5H2m4.5 0V14"/></g>
    </svg>
  );
}