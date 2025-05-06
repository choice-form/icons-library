import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Lock icon
 */
const Lock: Icon = {
  name: 'lock',
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
      d: "M8 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13 15.5H3A1.5 1.5 0 0 1 1.5 14V9A1.5 1.5 0 0 1 3 7.5h10A1.5 1.5 0 0 1 14.5 9v5a1.5 1.5 0 0 1-1.5 1.5M4.5 5.5V4a3.5 3.5 0 1 1 7 0v1.5"/><path d="M8 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Lock;
