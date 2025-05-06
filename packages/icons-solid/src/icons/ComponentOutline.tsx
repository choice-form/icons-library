import { splitProps } from 'solid-js';

export interface ComponentOutlineProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ComponentOutline(props: ComponentOutlineProps) {
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
      <g stroke="currentColor" stroke-linejoin="round"><path d="M9.646 4.146 8.354 2.854a.5.5 0 0 0-.708 0L6.354 4.146a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708ZM6.146 7.646 4.854 6.354a.5.5 0 0 0-.708 0L2.854 7.646a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708ZM13.146 7.646l-1.293-1.292a.5.5 0 0 0-.707 0L9.854 7.646a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .707 0l1.293-1.292a.5.5 0 0 0 0-.708ZM9.646 11.146 8.354 9.854a.5.5 0 0 0-.708 0l-1.292 1.292a.5.5 0 0 0 0 .707l1.292 1.293a.5.5 0 0 0 .708 0l1.292-1.293a.5.5 0 0 0 0-.707Z"/></g>
    </svg>
  );
}