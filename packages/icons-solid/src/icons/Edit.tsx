import { splitProps } from 'solid-js';

export interface EditProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Edit(props: EditProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11.793 3.793-.586-.586a1 1 0 0 0-1.414 0L2.5 10.5l-1 3 3-1 7.293-7.293a1 1 0 0 0 0-1.414M8.5 4.5l2 2M6.5 13.5h7"/></g>
    </svg>
  );
}