import { splitProps } from 'solid-js';

export interface ViewDuplicateProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ViewDuplicate(props: ViewDuplicateProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 6.5v-1a1 1 0 0 1 1-1h1m0 10h-1a1 1 0 0 1-1-1v-1m8 2h1a1 1 0 0 0 1-1v-1m-4 2h-2m-4-6v2M6.5 1.5h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1"/></g>
    </svg>
  );
}