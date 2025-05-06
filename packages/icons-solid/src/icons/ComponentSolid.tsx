import { splitProps } from 'solid-js';

export interface ComponentSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ComponentSolid(props: ComponentSolidProps) {
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
      <g fill="currentColor"><path d="M5.784 4.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM5.784 11.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM10.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372zM3.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372z"/></g>
    </svg>
  );
}