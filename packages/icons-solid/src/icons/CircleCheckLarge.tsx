import { splitProps } from 'solid-js';

export interface CircleCheckLargeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CircleCheckLarge(props: CircleCheckLargeProps) {
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
      <g fill="currentColor"><path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6"/><path d="M7 11a1 1 0 0 1-.707-.293l-2-2a.999.999 0 1 1 1.414-1.414L7 8.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 7 11"/></g>
    </svg>
  );
}