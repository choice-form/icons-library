import { splitProps } from 'solid-js';

export interface AddBranchSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function AddBranchSolid(props: AddBranchSolidProps) {
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
      <g fill="currentColor"><path fill-rule="evenodd" d="M5 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m5-2a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H10z" clip-rule="evenodd"/><path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
    </svg>
  );
}