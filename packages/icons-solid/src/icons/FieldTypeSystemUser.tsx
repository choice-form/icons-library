import { splitProps } from 'solid-js';

export interface FieldTypeSystemUserProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeSystemUser(props: FieldTypeSystemUserProps) {
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
      <g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M3.5 12.5a3 3 0 0 1 3-3h1m2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path stroke="#05F" d="M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/></g>
    </svg>
  );
}