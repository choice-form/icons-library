import { splitProps } from 'solid-js';

export interface EditReadonlyProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EditReadonly(props: EditReadonlyProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5.5 8.5-2 2-1 3 3-1 2-2m1-5 2.293-2.293a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L10.5 7.5M9.5 4.5l2 2M2.5 2.5l11 11"/></g>
    </svg>
  );
}