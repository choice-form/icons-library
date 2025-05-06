import { splitProps } from 'solid-js';

export interface FieldTypeCurrencyProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function FieldTypeCurrency(props: FieldTypeCurrencyProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3v10M10 4.5H6.25a1.75 1.75 0 1 0 0 3.5h2.5a1.75 1.75 0 1 1 0 3.5H4.5"/>
    </svg>
  );
}