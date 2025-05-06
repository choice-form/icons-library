import { splitProps } from 'solid-js';

export interface OpinionScaleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function OpinionScale(props: OpinionScaleProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 13.5h12M12.5 3v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5M8.5 6v5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5M2.5 8v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5"/></g>
    </svg>
  );
}