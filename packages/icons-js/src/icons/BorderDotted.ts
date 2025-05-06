import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * BorderDotted icon
 */
const BorderDotted: Icon = {
  name: 'border-dotted',
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
      d: "M2.5 7.5h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BorderDotted;
