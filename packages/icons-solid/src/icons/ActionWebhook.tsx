import { splitProps } from 'solid-js';

export interface ActionWebhookProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionWebhook(props: ActionWebhookProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4 11 1.24-2.171 1.51-2.664a2.5 2.5 0 1 1 3.7-1.665M6.292 10A2.5 2.5 0 1 1 3.5 8.55"/><path d="M3.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"/><path stroke-opacity=".25" d="M10.925 8.55 8 4m0 .5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/><path d="M8.5 11h-2M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10"/></g>
    </svg>
  );
}