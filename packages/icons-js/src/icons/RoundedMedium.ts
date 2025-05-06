import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RoundedMedium icon
 */
const RoundedMedium: Icon = {
  name: 'rounded-medium',
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
      d: "M13.5 3.5h-9a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h9",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 3.5h-9a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h9"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RoundedMedium;
