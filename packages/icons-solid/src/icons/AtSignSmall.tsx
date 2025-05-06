import { splitProps } from 'solid-js';

export interface AtSignSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AtSignSmall(props: AtSignSmallProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.067 5.587v3.821c0 1.179 1.791 1.441 2.729-.153.795-1.349.6-3.406-.393-4.76-1.461-1.993-4.839-2.738-7.293-1.091-2.255 1.514-3.058 4.577-1.812 7.053 1.233 2.45 4.127 3.637 6.747 2.751"/><path d="M7.911 10.221c1.186 0 2.147-1.028 2.147-2.297s-.961-2.297-2.147-2.297-2.147 1.028-2.147 2.297.961 2.297 2.147 2.297"/></g>
    </svg>
  );
}