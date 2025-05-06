import { splitProps } from 'solid-js';

export interface MemberAccountsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function MemberAccounts(props: MemberAccountsProps) {
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 13V3.5a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3A1.5 1.5 0 0 0 1.5 13m0 0A1.5 1.5 0 0 0 3 14.5h9.5a1 1 0 0 0 1-1V13"/><path fill="currentColor" fill-opacity=".25" d="M6.5 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M4.5 10.5v1h7v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2"/></g>
    </svg>
  );
}