import { splitProps } from 'solid-js';

export interface UserSearchSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function UserSearchSmall(props: UserSearchSmallProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7.15 9.5H5.5a2 2 0 0 0-2 2v1M10.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12.5 12.5l-.95-.95"/></g>
    </svg>
  );
}