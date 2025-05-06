import { splitProps } from 'solid-js';

export interface ColorTypeGradientProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ColorTypeGradient(props: ColorTypeGradientProps) {
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
      <g stroke="currentColor"><path d="M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".75" d="M6.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" d="M8.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M10.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/></g>
    </svg>
  );
}