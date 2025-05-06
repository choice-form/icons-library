import { splitProps } from 'solid-js';

export interface PrinterProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Printer(props: PrinterProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 10.5h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1m-9-7v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m-1 6v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
    </svg>
  );
}