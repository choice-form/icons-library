import { splitProps } from 'solid-js';

export interface ActionGetRecordsFromANodeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionGetRecordsFromANode(props: ActionGetRecordsFromANodeProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 12.5h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7m-8-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10"/></g>
    </svg>
  );
}