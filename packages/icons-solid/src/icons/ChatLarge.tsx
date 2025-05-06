import { splitProps } from 'solid-js';

export interface ChatLargeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ChatLarge(props: ChatLargeProps) {
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
      <path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2.6l2.7 2.7c.2.2.4.3.7.3s.5-.1.7-.3l2.7-2.7H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 11h-3c-.3 0-.5.1-.7.3L8 13.6l-2.3-2.3c-.2-.2-.4-.3-.7-.3H2V2h12z"/>
    </svg>
  );
}