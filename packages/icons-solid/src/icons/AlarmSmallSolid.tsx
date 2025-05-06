import { splitProps } from 'solid-js';

export interface AlarmSmallSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AlarmSmallSolid(props: AlarmSmallSolidProps) {
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
      <g fill="currentColor"><path d="M13.5 10A1.65 1.65 0 0 1 12 8.5V6a4 4 0 1 0-8 0v2.5A1.65 1.65 0 0 1 2.5 10a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1M8 14a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2"/></g>
    </svg>
  );
}