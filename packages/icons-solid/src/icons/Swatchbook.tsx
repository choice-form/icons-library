import { splitProps } from 'solid-js';

export interface SwatchbookProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Swatchbook(props: SwatchbookProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5v9a2 2 0 1 0 4 0v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1"/><path d="M6.5 6.672 9.621 3.55a1 1 0 0 1 1.415 0l1.414 1.414a1 1 0 0 1 0 1.415l-6.95 6.95"/><path d="M9.5 9.5h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8M4.5 11.5h.005"/></g>
    </svg>
  );
}