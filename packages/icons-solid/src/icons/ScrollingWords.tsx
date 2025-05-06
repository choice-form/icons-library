import { splitProps } from 'solid-js';

export interface ScrollingWordsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ScrollingWords(props: ScrollingWordsProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h8m-8 3h4m2 0h2m-8 3h6m-7 2h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1"/>
    </svg>
  );
}