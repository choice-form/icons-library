import { splitProps } from 'solid-js';

export interface CogwheelSolidSmallProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CogwheelSolidSmall(props: CogwheelSolidSmallProps) {
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
      <path fill="currentColor" d="m13.555 7-1.486-.165a4.2 4.2 0 0 0-.37-.893l.934-1.168a.5.5 0 0 0-.037-.666l-.707-.708a.5.5 0 0 0-.666-.037l-1.168.937a4.2 4.2 0 0 0-.893-.37L9 2.445A.5.5 0 0 0 8.5 2h-1a.5.5 0 0 0-.5.445l-.162 1.486q-.467.134-.893.37l-1.168-.934a.5.5 0 0 0-.666.037l-.711.707a.5.5 0 0 0-.037.666L4.3 5.945a4.2 4.2 0 0 0-.37.893L2.445 7A.5.5 0 0 0 2 7.5v1a.5.5 0 0 0 .445.5l1.486.165q.134.467.37.893l-.934 1.165a.5.5 0 0 0 .037.666l.707.707a.5.5 0 0 0 .666.037l1.168-.933q.425.236.893.37L7 13.555a.5.5 0 0 0 .5.445h1a.5.5 0 0 0 .5-.445l.165-1.486q.467-.134.893-.37l1.168.934a.5.5 0 0 0 .666-.037l.707-.707a.5.5 0 0 0 .037-.666l-.936-1.168a4.2 4.2 0 0 0 .37-.893L13.555 9A.5.5 0 0 0 14 8.5v-1a.5.5 0 0 0-.445-.5M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>
    </svg>
  );
}