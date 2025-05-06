import { splitProps } from 'solid-js';

export interface AlarmSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AlarmSmall(props: AlarmSmallProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.592 12.5a1.491 1.491 0 0 0 2.816 0M2.5 10.5h11M13.5 10.5a2.15 2.15 0 0 1-2-2V6a3.5 3.5 0 1 0-7 0v2.5a2.15 2.15 0 0 1-2 2"/></g>
    </svg>
  );
}