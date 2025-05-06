import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * House icon
 */
const House: Icon = {
  name: 'house',
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
      d: "m12.5 6.5-5-4-5 4v6.002c0 .552.448.998 1 .998h2v-4h4v4h2c.552 0 1-.446 1-.998z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 6.5-5-4-5 4v6.002c0 .552.448.998 1 .998h2v-4h4v4h2c.552 0 1-.446 1-.998z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default House;
