import { splitProps } from 'solid-js';

export interface EmptyDynamicProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EmptyDynamic(props: EmptyDynamicProps) {
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M9.454 7.306v3.474c0 1.071 1.694 1.31 2.58-.14.752-1.226.568-3.096-.37-4.326-1.382-1.812-4.576-2.49-6.896-.992-2.133 1.376-2.892 4.16-1.714 6.411 1.166 2.227 3.902 3.306 6.38 2.501m.012-4.803c0 1.153-.909 2.088-2.03 2.088s-2.03-.935-2.03-2.088.909-2.088 2.03-2.088 2.03.934 2.03 2.088"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g>
    </svg>
  );
}