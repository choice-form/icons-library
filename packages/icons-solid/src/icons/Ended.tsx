import { splitProps } from 'solid-js';

export interface EndedProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Ended(props: EndedProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11m-8-8h-2v6h2m-2-3h2m2 3v-6l2 6v-6m2 0v6h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/>
    </svg>
  );
}