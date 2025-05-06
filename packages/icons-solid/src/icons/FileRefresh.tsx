import { splitProps } from 'solid-js';

export interface FileRefreshProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FileRefresh(props: FileRefreshProps) {
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
      <path fill="currentColor" fill-opacity=".25" d="m13.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 1.5h-4a1 1 0 0 0-1 1v2m5-3 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v7a1 1 0 0 1-1 1h-2M9.364 9.465A4 4 0 1 0 9.208 12"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.422 9.095 1.932.517.517-1.931"/>
    </svg>
  );
}