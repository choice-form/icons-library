import { splitProps } from 'solid-js';

export interface EditObjectProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EditObject(props: EditObjectProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M2.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4.5 3.5h6M11.5 4.5v6m-1 1h-6m-1-1v-6"/></g>
    </svg>
  );
}