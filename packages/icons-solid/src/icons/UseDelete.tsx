import { splitProps } from 'solid-js';

export interface UseDeleteProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function UseDelete(props: UseDeleteProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h2M12.914 10.914l-2.828-2.828m0 2.828 2.828-2.828"/></g>
    </svg>
  );
}