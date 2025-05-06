import { splitProps } from 'solid-js';

export interface TriggerStartedByWebhookProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TriggerStartedByWebhook(props: TriggerStartedByWebhookProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 11a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M8 4l1.714 3M4 11l1.24-2.17 1.51-2.665a2.5 2.5 0 1 1 3.7-1.665M6.292 10A2.5 2.5 0 1 1 3.5 8.55"/><path stroke-opacity=".25" d="M11.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"/><path d="M3.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M7.5 4a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 11h-3"/></g>
    </svg>
  );
}