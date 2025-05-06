import { splitProps } from 'solid-js';

export interface ToolbarPreviewRegularProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarPreviewRegular(props: ToolbarPreviewRegularProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 8s3-5.5 7.5-5.5S15.5 8 15.5 8s-3 5.5-7.5 5.5S.5 8 .5 8"/><path d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></g>
    </svg>
  );
}