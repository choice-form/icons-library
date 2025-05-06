import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ArrowsMaximize icon
 */
const ArrowsMaximize: Icon = {
  name: 'arrows-maximize',
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
      "stroke-miterlimit": "10",
      d: "M13.5 1.5 9 6m4.5-4.5H9m4.5 0V6m-12 7.5L6 9m-4.5 4.5H6m-4.5 0V9",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.5 1.5 9 6m4.5-4.5H9m4.5 0V6m-12 7.5L6 9m-4.5 4.5H6m-4.5 0V9"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ArrowsMaximize;
