import { splitProps } from 'solid-js';

export interface CircleRemoveLargeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CircleRemoveLarge(props: CircleRemoveLargeProps) {
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
      <g fill="currentColor"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6"/><path d="m9.414 8 1.768-1.768a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0L8 6.586 6.232 4.818a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707L6.586 8 4.818 9.768a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0L8 9.414l1.768 1.768a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707z"/></g>
    </svg>
  );
}