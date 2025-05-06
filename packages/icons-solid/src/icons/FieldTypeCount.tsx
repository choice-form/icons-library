import { splitProps } from 'solid-js';

export interface FieldTypeCountProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeCount(props: FieldTypeCountProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 4.5h4m-4 2h.005m1.995 0h.005m1.995 0h.005M5.5 8.5h.005m1.995 0h.005m-2.005 2h.005m1.995 0h.005m2-2v2M4.5 2.5h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"/>
    </svg>
  );
}