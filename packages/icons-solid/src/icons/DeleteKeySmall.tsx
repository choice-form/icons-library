import { splitProps } from 'solid-js';

export interface DeleteKeySmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function DeleteKeySmall(props: DeleteKeySmallProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5H6.5L2.5 8l4 4.5H12a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 12 3.5"/>
    </svg>
  );
}