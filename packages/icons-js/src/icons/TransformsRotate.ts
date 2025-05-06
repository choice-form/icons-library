import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TransformsRotate icon
 */
const TransformsRotate: Icon = {
  name: 'transforms-rotate',
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
      d: "M3.5 8A4.5 4.5 0 1 0 8 3.5a4.88 4.88 0 0 0-3.37 1.37L3.5 6m0 0V3.5m0 2.5H6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 8A4.5 4.5 0 1 0 8 3.5a4.88 4.88 0 0 0-3.37 1.37L3.5 6m0 0V3.5m0 2.5H6"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TransformsRotate;
