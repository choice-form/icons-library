import { splitProps } from 'solid-js';

export interface ActionFormulaNodeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function ActionFormulaNode(props: ActionFormulaNodeProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 8.5h7M13.5 14.5l-3-3m3 0-3 3M12.5 4.5h-1.512a2 2 0 0 0-1.916 1.425l-2.144 7.15A2 2 0 0 1 5.012 14.5H2.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1"/></g>
    </svg>
  );
}