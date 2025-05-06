import { splitProps } from 'solid-js';

export interface RecordFreezeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RecordFreeze(props: RecordFreezeProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="M1.5 5.5v-4h12v4z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2m-3-11v4h12v-4zM13.5 10.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M9.5 10V9a1.5 1.5 0 0 1 3 0v1"/>
    </svg>
  );
}