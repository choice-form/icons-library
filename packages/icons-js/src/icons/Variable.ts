import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Variable icon
 */
const Variable: Icon = {
  name: 'variable',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linejoin": "round",
      d: "M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
      "stroke-linecap": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linejoin="round"><path d="M7.5 2.5 12 5v5l-4.5 2.5L3 10V5z"/><path stroke-linecap="round" d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Variable;
