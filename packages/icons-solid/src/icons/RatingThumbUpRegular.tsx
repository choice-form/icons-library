import { splitProps } from 'solid-js';

export interface RatingThumbUpRegularProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function RatingThumbUpRegular(props: RatingThumbUpRegularProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5H0v8h3zM5 15.5h6.9a2 2 0 0 0 1.952-1.566l1.111-5A2 2 0 0 0 13.007 6.5H9v-4a2 2 0 0 0-2-2l-2 6"/></g>
    </svg>
  );
}