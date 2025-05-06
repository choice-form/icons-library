import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ReplyArrow icon
 */
const ReplyArrow: Icon = {
  name: 'reply-arrow',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m2.5 8 5-4.5v3c2.773 0 6 1.233 6 6a6.62 6.62 0 0 0-6-3v3z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 8 5-4.5v3c2.773 0 6 1.233 6 6a6.62 6.62 0 0 0-6-3v3z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ReplyArrow;
