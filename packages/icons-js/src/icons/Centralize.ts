import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Centralize icon
 */
const Centralize: Icon = {
  name: 'centralize',
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
      d: "m12.5 2.5-3 3m0 0H12m-2.5 0V3m-7 9.5 3-3m0 0H3m2.5 0V12m-3-9.5 3 3m0 0V3m0 2.5H3m9.5 7-3-3m0 0V12m0-2.5H12",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 2.5-3 3m0 0H12m-2.5 0V3m-7 9.5 3-3m0 0H3m2.5 0V12m-3-9.5 3 3m0 0V3m0 2.5H3m9.5 7-3-3m0 0V12m0-2.5H12"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Centralize;
