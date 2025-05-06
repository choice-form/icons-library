import { splitProps } from 'solid-js';

export interface EmptyNoAuthorityProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyNoAuthority(props: EmptyNoAuthorityProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5h-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4.5 6.5v-2a3 3 0 0 1 6 0v2"/><path fill="currentColor" fill-opacity=".25" d="M6.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5v2m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </svg>
  );
}