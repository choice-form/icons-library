import { splitProps } from 'solid-js';

export interface HyperlinkBrokenProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function HyperlinkBroken(props: HyperlinkBrokenProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M7.5 4.5 8 4a2.121 2.121 0 1 1 3 3l-.5.5M7.5 10.5 7 11a2.121 2.121 0 0 1-3-3l.5-.5"/><path stroke-linejoin="round" d="M11 9.5h1.5m-3 1.5v1.5M5.5 4V2.5M4 5.5H2.5"/></g>
    </svg>
  );
}