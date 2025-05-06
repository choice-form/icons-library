import { splitProps } from 'solid-js';

export interface CommentProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Comment(props: CommentProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.267C13.5 4.634 11.037 2.5 8 2.5S2.5 4.634 2.5 7.267s2.463 4.766 5.5 4.766a6.4 6.4 0 0 0 1.123-.1L12 13.5v-3a4.46 4.46 0 0 0 1.5-3.233"/>
    </svg>
  );
}