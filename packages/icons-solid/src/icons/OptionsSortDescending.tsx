import { splitProps } from 'solid-js';

export interface OptionsSortDescendingProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function OptionsSortDescending(props: OptionsSortDescendingProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 5.5 2-2m0 0 2 2m-2-2v8m4-8H12l-2.5 3H12m-2.5 5V9.75a1.25 1.25 0 0 1 2.5 0v1.75m0-.5H9.5"/>
    </svg>
  );
}