import { splitProps } from 'solid-js';

export interface MegaphoneProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Megaphone(props: MegaphoneProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m8.151 10.401.717 1.425a1.151 1.151 0 0 1-2.047 1.048L4.576 8.5"/><path d="M12.5 10.5s-2.952-2-4.976-2H4.5a2 2 0 1 1 0-4h3.024c1.976 0 4.976-2 4.976-2z"/></g>
    </svg>
  );
}