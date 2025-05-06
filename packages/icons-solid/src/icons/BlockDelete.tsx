import { splitProps } from 'solid-js';

export interface BlockDeleteProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function BlockDelete(props: BlockDeleteProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0M12.5 10.5h-4"/><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM4.5 7.5h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2"/></g>
    </svg>
  );
}