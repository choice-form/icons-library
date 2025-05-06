import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Google icon
 */
const Google: Icon = {
  name: 'google',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      id: "a",
      x: "0",
      y: "0",
      "mask-type": "luminance",
      maskUnits: "userSpaceOnUse",
      d: "M15.033 6.667h-7v3H12c-.633 2-2.2 2.666-4 2.666a4.333 4.333 0 1 1 2.782-7.65l2.18-2.077A7.332 7.332 0 1 0 8 15.333c4.044 0 7.7-2.666 7.033-8.666",
      mask: "url(#a)",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<mask id="a" width="16" height="16" x="0" y="0" mask-type="luminance" maskUnits="userSpaceOnUse"><path fill="#fff" d="M16 0H0v16h16z"/></mask><g mask="url(#a)"><path fill="currentColor" d="M15.033 6.667h-7v3H12c-.633 2-2.2 2.666-4 2.666a4.333 4.333 0 1 1 2.782-7.65l2.18-2.077A7.332 7.332 0 1 0 8 15.333c4.044 0 7.7-2.666 7.033-8.666"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Google;
