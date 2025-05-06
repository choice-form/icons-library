import { splitProps } from 'solid-js';

export interface QuestionSquareProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function QuestionSquare(props: QuestionSquareProps) {
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
      <g stroke="currentColor"><path d="M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"/><path stroke-linecap="round" d="M5.5 6.5c0-1 .5-2 2-2s2.5 1 2 2-2 1-2 2.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5h.005"/></g>
    </svg>
  );
}