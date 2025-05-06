import { splitProps } from 'solid-js';

export interface GoogleDriveColorProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
  [key: string]: any;
}

export function GoogleDriveColor(props: GoogleDriveColorProps) {
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
      <mask id="a" width="16" height="16" x="0" y="0" mask-type="luminance" maskUnits="userSpaceOnUse"><path fill="#fff" d="M16 0H0v16h16z"/></mask><g mask="url(#a)"><path fill="#0066DA" d="m1.21 13.252.705 1.219c.147.256.358.458.605.605l2.52-4.362H0c0 .284.073.568.22.824z"/><path fill="#00AC47" d="M8 5.582 5.48 1.22a1.66 1.66 0 0 0-.605.605L.22 9.889a1.66 1.66 0 0 0-.22.825h5.04z"/><path fill="#EA4335" d="M13.48 15.076c.247-.147.458-.349.605-.605l.293-.504 1.402-2.429c.147-.256.22-.54.22-.824h-5.04l1.072 2.107z"/><path fill="#00832D" d="m8 5.582 2.52-4.362A1.6 1.6 0 0 0 9.695 1h-3.39c-.294 0-.578.082-.825.22z"/><path fill="#2684FC" d="M10.96 10.714H5.04l-2.52 4.362c.247.146.532.22.825.22h9.31c.293 0 .578-.083.825-.22z"/><path fill="#FFBA00" d="m13.453 5.857-2.328-4.032a1.66 1.66 0 0 0-.605-.605L8 5.582l2.96 5.132h5.03a1.66 1.66 0 0 0-.22-.825z"/></g>
    </svg>
  );
}