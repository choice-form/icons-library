import { splitProps } from 'solid-js';

export interface ActionGetSegmentFiltersProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionGetSegmentFilters(props: ActionGetSegmentFiltersProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m13.5 6.5-3 3.5v4.5l-2-1V10l-3-3.5"/><path stroke-opacity=".25" d="M8.5 6.5h2"/><path d="M4.5 4.5h10M13.5 2.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3"/></g>
    </svg>
  );
}