import { splitProps } from 'solid-js';

export interface NumberProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Number(props: NumberProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path d="M8.501 6.409a1.18 1.18 0 0 1 1.221-.907c.399.027.788.212.972.556a1 1 0 0 1 .11.462c.002.561-.411.959-1.078 1.656-.286.299-.71.749-1.226 1.323h2.453M4.5 6.5l1-1v4h-1 2"/></g>
    </svg>
  );
}