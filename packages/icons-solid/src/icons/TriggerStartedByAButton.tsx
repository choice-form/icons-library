import { splitProps } from 'solid-js';

export interface TriggerStartedByAButtonProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TriggerStartedByAButton(props: TriggerStartedByAButtonProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7 2.5 6.5 1-3 3-1z"/><path stroke-opacity=".25" d="M7 3.5 7.5 5M6 6.5 4.5 6m6-1.5-1 1m-3 3-1 1"/><path d="M13.5 5.5v-3a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4"/></g>
    </svg>
  );
}