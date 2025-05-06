import { splitProps } from 'solid-js';

export interface TriggerStartedByAnEventProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TriggerStartedByAnEvent(props: TriggerStartedByAnEventProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5V12a.5.5 0 0 0 .5.5h1.5m-2-2V9a.5.5 0 0 1 .5-.5h1.5m-2 2h6m-4 2v-4m0 4h2m-2-4h2m2 2V9a.5.5 0 0 0-.5-.5H8.5m2 2V12a.5.5 0 0 1-.5.5H8.5m0-4v4"/><path fill="currentColor" fill-opacity=".25" d="m12.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path d="M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8"/></g>
    </svg>
  );
}