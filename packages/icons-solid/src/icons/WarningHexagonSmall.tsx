import { splitProps } from 'solid-js';

export interface WarningHexagonSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function WarningHexagonSmall(props: WarningHexagonSmallProps) {
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
      <g stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8 5.5v3M8 10.5h.005"/><path d="m13 8-2.5 4.5h-5L3 8l2.5-4.5h5z"/></g>
    </svg>
  );
}