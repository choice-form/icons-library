import { splitProps } from 'solid-js';

export interface CollapseLayersProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CollapseLayers(props: CollapseLayersProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="m9.5 12.5 2-2 2 2M9.5 3.5l2 2 2-2"/><path d="M2.5 3.5h5m-5 3h5m-5 3h5m-5 3h5"/></g>
    </svg>
  );
}