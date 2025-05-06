import { splitProps } from 'solid-js';

export interface EffectsSettingsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function EffectsSettings(props: EffectsSettingsProps) {
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v1m0 8v1M3.965 3.965l.705.705m5.66 5.66.705.705M2.5 7.5h1m8 0h1m-7.83 2.83-.705.705m7.07-7.07-.705.705M9.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  );
}