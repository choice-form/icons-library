import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Rating icon
 */
const Rating: Icon = {
  name: 'rating',
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
      d: "m7.5 1.5 1.854 3.786 4.146.607-3 2.946.708 4.161L7.5 11.036 3.792 13 4.5 8.839l-3-2.946 4.146-.607z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 1.5 1.854 3.786 4.146.607-3 2.946.708 4.161L7.5 11.036 3.792 13 4.5 8.839l-3-2.946 4.146-.607z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Rating;
