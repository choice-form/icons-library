import { splitProps } from 'solid-js';

export interface ImageImportProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ImageImport(props: ImageImportProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path d="M12.5 8.5v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/><path d="m2 11 2.5-2.5L6 10l3.5-3.5M12.5 10.5l2 2m0 0-2 2m2-2h-7"/></g>
    </svg>
  );
}