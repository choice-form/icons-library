import { splitProps } from 'solid-js';

export interface TriggerConnectorEventProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function TriggerConnectorEvent(props: TriggerConnectorEventProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 6 5.5 7.5M10 9l-1.5 1.5M13 3a3.536 3.536 0 0 0-5 0l-.5.5 5 5L13 8a3.536 3.536 0 0 0 0-5m0 0 1.5-1.5M4 12a3.536 3.536 0 0 0 5 0l.5-.5-5-5L4 7a3.536 3.536 0 0 0 0 5m0 0-2.5 2.5"/></g>
    </svg>
  );
}