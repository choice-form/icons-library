import { splitProps } from 'solid-js';

export interface AddressProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Address(props: AddressProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.603 7.192C12.536 4.392 10.452 1.5 7.5 1.5S2.464 4.392 3.397 7.192C4.191 9.572 7.5 13.5 7.5 13.5s3.31-3.928 4.103-6.308"/><path d="M5.5 5.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/></g>
    </svg>
  );
}