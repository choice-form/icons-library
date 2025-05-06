import { splitProps } from 'solid-js';

export interface StarSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function StarSolid(props: StarSolidProps) {
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
      <path fill="currentColor" d="m13.572 6.27-3.54-.514-1.584-3.208a.52.52 0 0 0-.9 0l-1.58 3.208-3.54.514a.5.5 0 0 0-.277.853l2.562 2.5-.606 3.526a.5.5 0 0 0 .726.527L8 12.008l3.167 1.665a.5.5 0 0 0 .726-.527l-.606-3.526 2.562-2.5a.5.5 0 0 0-.277-.853z"/>
    </svg>
  );
}