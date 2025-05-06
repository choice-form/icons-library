import { splitProps } from 'solid-js';

export interface FavoriteSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FavoriteSolid(props: FavoriteSolidProps) {
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
      <path fill="currentColor" d="M12.988 4.055a3.34 3.34 0 0 0-5.001.149 3.336 3.336 0 0 0-5.006-.141A3.7 3.7 0 0 0 2.989 9.1l4.641 4.75a.5.5 0 0 0 .715 0l4.644-4.75a3.614 3.614 0 0 0-.001-5.045"/>
    </svg>
  );
}