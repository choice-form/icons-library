import { splitProps } from 'solid-js';

export interface ToolbarComponentProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ToolbarComponent(props: ToolbarComponentProps) {
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
      <g stroke="currentColor"><path d="m8.354.854 2.292 2.292a.5.5 0 0 1 0 .708L8.354 6.146a.5.5 0 0 1-.708 0L5.354 3.854a.5.5 0 0 1 0-.708L7.646.854a.5.5 0 0 1 .708 0ZM8.354 9.854l2.292 2.292a.5.5 0 0 1 0 .708l-2.292 2.292a.5.5 0 0 1-.708 0l-2.292-2.292a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0ZM15.146 8.354l-2.292 2.292a.5.5 0 0 1-.708 0L9.854 8.354a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708ZM6.146 8.354l-2.292 2.292a.5.5 0 0 1-.708 0L.854 8.354a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708Z"/></g>
    </svg>
  );
}