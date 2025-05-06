import { splitProps } from 'solid-js';

export interface ToolbarCreateSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarCreateSolid(props: ToolbarCreateSolidProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 15.5h14"/><path fill="currentColor" d="M11.56.854a1.5 1.5 0 0 0-2.12 0l-.586.585a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707 0l.585-.585a1.5 1.5 0 0 0 0-2.122zM11.146 6.56a.5.5 0 0 0 0-.706l-3-3a.5.5 0 0 0-.707 0L1.842 8.45a1.5 1.5 0 0 0-.394.696L.515 12.88a.5.5 0 0 0 .606.606l3.732-.933a1.5 1.5 0 0 0 .696-.394z"/>
    </svg>
  );
}