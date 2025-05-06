import { splitProps } from 'solid-js';

export interface GoogleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Google(props: GoogleProps) {
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
      <mask id="a" width="16" height="16" x="0" y="0" mask-type="luminance" maskUnits="userSpaceOnUse"><path fill="#fff" d="M16 0H0v16h16z"/></mask><g mask="url(#a)"><path fill="currentColor" d="M15.033 6.667h-7v3H12c-.633 2-2.2 2.666-4 2.666a4.333 4.333 0 1 1 2.782-7.65l2.18-2.077A7.332 7.332 0 1 0 8 15.333c4.044 0 7.7-2.666 7.033-8.666"/></g>
    </svg>
  );
}