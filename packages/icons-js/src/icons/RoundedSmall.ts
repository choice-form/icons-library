import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RoundedSmall icon
 */
const RoundedSmall: Icon = {
  name: 'rounded-small',
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
      d: "M13.5 3.5h-11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 3.5h-11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RoundedSmall;
