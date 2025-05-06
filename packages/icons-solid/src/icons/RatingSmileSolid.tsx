import { splitProps } from 'solid-js';

export interface RatingSmileSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RatingSmileSolid(props: RatingSmileSolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5.429 9.542a.5.5 0 0 0-.858.515 4 4 0 0 0 6.858 0 .5.5 0 1 0-.858-.515 3 3 0 0 1-5.142 0" clip-rule="evenodd"/>
    </svg>
  );
}