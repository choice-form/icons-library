import { splitProps } from 'solid-js';

export interface EffectInnerShadowProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EffectInnerShadow(props: EffectInnerShadowProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.6 2.5H4.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h7.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/><path fill="currentColor" fill-opacity=".25" d="M13 10.611c0 .753-.61 1.364-1.364 1.364H4.364C3.61 11.975 3 11.365 3 10.61V9h10z"/>
    </svg>
  );
}