import { splitProps } from 'solid-js';

export interface CircleQuestionLargeSolidProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function CircleQuestionLargeSolid(props: CircleQuestionLargeSolidProps) {
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
      <path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m0 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.623-4.908C9.126 8.519 9 8.663 9 9a1 1 0 1 1-2 0c0-1.294.795-1.976 1.322-2.427.497-.425.623-.57.623-.906 0-.183 0-.667-.944-.667a2.05 2.05 0 0 0-1.258.561A1 1 0 1 1 5.37 4.106a4.08 4.08 0 0 1 2.579-1.104h.003c1.812 0 2.993 1.071 2.993 2.666 0 1.293-.795 1.975-1.321 2.425z"/>
    </svg>
  );
}