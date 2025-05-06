import { splitProps } from 'solid-js';

export interface SupportSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function SupportSmall(props: SupportSmallProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9.767 6.233 2.122-2.122M9.767 9.767l2.122 2.122M6.233 9.767l-2.122 2.122M6.233 6.233 4.111 4.111M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/><path d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></g>
    </svg>
  );
}