import { splitProps } from 'solid-js';

export interface ChatLargeSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ChatLargeSolid(props: ChatLargeSolidProps) {
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
      <path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.266l2.35 2.82a.5.5 0 0 0 .768 0l2.35-2.82H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"/>
    </svg>
  );
}