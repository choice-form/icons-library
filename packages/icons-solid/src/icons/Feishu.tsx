import { splitProps } from 'solid-js';

export interface FeishuProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Feishu(props: FeishuProps) {
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
      <path fill="currentColor" d="M4.19 3.26a19 19 0 0 1 4.294 4.974L9.589 7.16a5.5 5.5 0 0 1 1.834-1.164 8.2 8.2 0 0 0-1.506-2.834A.44.44 0 0 0 9.574 3h-5.29a.15.15 0 0 0-.14.097.145.145 0 0 0 .046.163m3.068 6.877c.802.338 1.638.621 2.49.848 1.516.403 2.955-.199 3.665-1.533l.859-1.685q.289-.618.728-1.139a4.7 4.7 0 0 0-1.619-.283 4.7 4.7 0 0 0-3.285 1.32L8.782 8.941c-.464.45-.975.852-1.524 1.196M1.253 7.062A.15.15 0 0 0 1 7.167l.003 5.089c0 .147.073.28.194.359A8.5 8.5 0 0 0 5.872 14a8.5 8.5 0 0 0 5.882-2.34 4.1 4.1 0 0 1-2.19.009c-3.195-.847-5.985-2.395-8.311-4.607"/>
    </svg>
  );
}