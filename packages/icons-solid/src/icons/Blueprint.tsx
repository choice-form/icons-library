import { splitProps } from 'solid-js';

export interface BlueprintProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Blueprint(props: BlueprintProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M13.5 7.5v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5m0-4v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1M2.5 5.5h11M4.5 9.5h1m2 0h1m2 0h1M4.5 7.5h1m2 0h1m2 0h1M4.5 11.5h1m2 0h1m2 0h1M4.5 3.5h7"/></g>
    </svg>
  );
}