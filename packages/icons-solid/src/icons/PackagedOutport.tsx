import { splitProps } from 'solid-js';

export interface PackagedOutportProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function PackagedOutport(props: PackagedOutportProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8.5V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.382a.5.5 0 0 0 .276.447L6.5 14M3.5 5.5l4 2m0 0 4-2m-4 2v5"/><path d="M3.5 5.5v5l4 2M9.5 4.5l-2-1-2 1M12.5 10.5l2 2m0 0-2 2m2-2h-5"/></g>
    </svg>
  );
}