import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * OptionsSortAscending icon
 */
const OptionsSortAscending: Icon = {
  name: 'options-sort-ascending',
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
      d: "m3.5 9.5 2 2m0 0 2-2m-2 2v-8m6.5 2H9.5m0 1V4.75a1.25 1.25 0 0 1 2.5 0V6.5m-2.5 2H12l-2.5 3H12",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 9.5 2 2m0 0 2-2m-2 2v-8m6.5 2H9.5m0 1V4.75a1.25 1.25 0 0 1 2.5 0V6.5m-2.5 2H12l-2.5 3H12"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default OptionsSortAscending;
