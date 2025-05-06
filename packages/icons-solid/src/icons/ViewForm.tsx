import { splitProps } from 'solid-js';

export interface ViewFormProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ViewForm(props: ViewFormProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1"/><path d="M3.5 3.5h4m-3.5 8h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5m0-4h7a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5"/></g>
    </svg>
  );
}