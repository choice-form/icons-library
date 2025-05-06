import { splitProps } from 'solid-js';

export interface PackagedImportProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function PackagedImport(props: PackagedImportProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5V4.809a.5.5 0 0 1 .276-.447l5.5-2.75a.5.5 0 0 1 .448 0l5.5 2.75a.5.5 0 0 1 .276.447v6.382a.5.5 0 0 1-.276.447L9.5 14M12.5 5.5l-4 2m0 0-4-2m4 2v5"/><path d="M12.5 7.5v3l-2 1M6.5 4.5l2-1 2 1M4.5 10.5l2 2m0 0-2 2m2-2h-5"/></g>
    </svg>
  );
}