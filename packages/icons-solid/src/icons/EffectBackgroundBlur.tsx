import { splitProps } from 'solid-js';

export interface EffectBackgroundBlurProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EffectBackgroundBlur(props: EffectBackgroundBlurProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.6 2.5H4.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h7.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/><path fill="currentColor" d="M5.22 4.47a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M5.22 6.573a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.22 8.427a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.22 10.03a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M7.073 4.72a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M7.073 6.823a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.073 8.677a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.073 10.28a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.927 4.72a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.927 6.823a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.927 8.677a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.927 10.28a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 4.47a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M10.78 6.573a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 8.427a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 10.03a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5"/>
    </svg>
  );
}