import { splitProps } from 'solid-js';

export interface PictureProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Picture(props: PictureProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="m9.346 7.11-5.919 5.524a.5.5 0 0 0 .342.866H12.5a1 1 0 0 0 1-1v-3l-2.82-2.418a1 1 0 0 0-1.334.028"/><path d="M4.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
    </svg>
  );
}