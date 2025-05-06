import { splitProps } from 'solid-js';

export interface ArtificialIntelligenceProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ArtificialIntelligence(props: ArtificialIntelligenceProps) {
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
      <g stroke="currentColor" stroke-linejoin="round"><path d="M8 2.5C8 5.814 10.186 8 13.5 8 10.186 8 8 10.186 8 13.5 8 10.186 5.814 8 2.5 8 5.814 8 8 5.814 8 2.5Z"/><path stroke-linecap="round" d="M10.5 4.5h2M3.5 11.5h2M11.5 3.5v2M4.5 10.5v2"/></g>
    </svg>
  );
}