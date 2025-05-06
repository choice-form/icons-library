import { splitProps } from 'solid-js';

export interface ViewSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ViewSmall(props: ViewSmallProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.638 8.528a1.08 1.08 0 0 1 0-1.056C3.308 6.283 5.179 3.5 8 3.5s4.692 2.783 5.362 3.972a1.08 1.08 0 0 1 0 1.056C12.692 9.717 10.821 12.5 8 12.5S3.308 9.717 2.638 8.528"/><path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
    </svg>
  );
}