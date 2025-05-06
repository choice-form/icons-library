import { splitProps } from 'solid-js';

export interface SatisfiedProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Satisfied(props: SatisfiedProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"/><path d="M12.388 9a4.5 4.5 0 0 1-8.776 0M3.5 6a1.5 1.5 0 0 1 3 0M9.5 6a1.5 1.5 0 0 1 3 0"/></g>
    </svg>
  );
}