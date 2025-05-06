import { splitProps } from 'solid-js';

export interface EmptyLogicProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyLogic(props: EmptyLogicProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M3.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke-linejoin="round" d="M4.5 12.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1M4.5 6.5v2"/></g>
    </svg>
  );
}