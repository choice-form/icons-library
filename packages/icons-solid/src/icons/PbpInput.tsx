import { splitProps } from 'solid-js';

export interface PbpInputProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function PbpInput(props: PbpInputProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11.5 5.5-4 2m0 0-4-2m4 2v5"/><path stroke-opacity=".25" d="M11.5 7.5v3l-2 1M5.5 4.5l2-1 2 1"/><path d="m5.5 13.5 1.776.888a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447V8.5a2 2 0 0 0 2 2h2m0 0-2 2m2-2-2-2"/></g>
    </svg>
  );
}