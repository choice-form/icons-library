import { splitProps } from 'solid-js';

export interface FieldTypeLookupProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeLookup(props: FieldTypeLookupProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5 11 11M2.5 2.5h10m-10 3h10m-10 3h3m-3 3h3m6-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  );
}