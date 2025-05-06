import { splitProps } from 'solid-js';

export interface SettingsSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function SettingsSolid(props: SettingsSolidProps) {
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
      <path fill="currentColor" fill-rule="evenodd" d="M6.64 1.418A.5.5 0 0 1 7.133 1h1.734a.5.5 0 0 1 .493.418l.263 1.576q.397.129.77.319l1.304-.929a.5.5 0 0 1 .644.054l1.218 1.222a.5.5 0 0 1 .053.644l-.929 1.303q.193.372.322.77l1.577.263a.5.5 0 0 1 .418.493v1.734a.5.5 0 0 1-.418.493l-1.573.263a5 5 0 0 1-.321.77l.928 1.304a.5.5 0 0 1-.054.644l-1.222 1.218a.5.5 0 0 1-.643.053l-1.304-.929a5 5 0 0 1-.77.322l-.263 1.577a.5.5 0 0 1-.493.418H7.133a.5.5 0 0 1-.493-.418l-.263-1.573a5 5 0 0 1-.77-.321l-1.304.928a.5.5 0 0 1-.643-.054L2.438 12.34a.5.5 0 0 1-.054-.643l.929-1.304a5 5 0 0 1-.319-.77L1.418 9.36A.5.5 0 0 1 1 8.867V7.133a.5.5 0 0 1 .418-.493l1.576-.263q.129-.397.319-.77l-.929-1.304a.5.5 0 0 1 .054-.643L3.66 2.438a.5.5 0 0 1 .643-.054l1.305.929q.371-.19.77-.319zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0" clip-rule="evenodd"/>
    </svg>
  );
}