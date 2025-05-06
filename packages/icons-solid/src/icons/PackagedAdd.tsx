import { splitProps } from 'solid-js';

export interface PackagedAddProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function PackagedAdd(props: PackagedAddProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.5V4.809a.5.5 0 0 1 .276-.447l5.5-2.75a.5.5 0 0 1 .448 0l5.5 2.75a.5.5 0 0 1 .276.447v6.382a.5.5 0 0 1-.276.447L9.5 14"/><path d="M12.5 5.5 8.724 7.388a.5.5 0 0 1-.448 0L4.5 5.5M12.5 7.5v3l-2 1M6.5 4.5l2-1 2 1M6 11.5H3M4.5 13v-3M7.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></g>
    </svg>
  );
}