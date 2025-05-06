import { splitProps } from 'solid-js';

export interface DingdingProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function Dingding(props: DingdingProps) {
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
      <path fill="currentColor" d="M12.978 6.233a2.6 2.6 0 0 1-.168.434h.002l-.01.016c-.488 1.048-1.764 3.104-1.764 3.104l-.007-.012-.373.65h1.798L9.023 15l.78-3.112H8.387l.49-2.058c-.396.096-.866.228-1.423.407 0 0-.752.442-2.169-.85 0 0-.954-.843-.4-1.054.235-.09 1.142-.203 1.856-.3.965-.13 1.56-.2 1.56-.2s-2.976.045-3.682-.066c-.706-.112-1.601-1.292-1.792-2.33 0 0-.295-.57.635-.3s4.776 1.05 4.776 1.05S3.236 4.65 2.903 4.275c-.333-.376-.98-2.048-.896-3.076 0 0 .037-.256.3-.187 0 0 3.698 1.694 6.227 2.621 2.53.928 4.728 1.4 4.444 2.6"/>
    </svg>
  );
}