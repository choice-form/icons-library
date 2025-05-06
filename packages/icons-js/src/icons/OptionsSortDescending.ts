import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * OptionsSortDescending icon
 */
const OptionsSortDescending: Icon = {
  name: 'options-sort-descending',
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
      d: "m3.5 5.5 2-2m0 0 2 2m-2-2v8m4-8H12l-2.5 3H12m-2.5 5V9.75a1.25 1.25 0 0 1 2.5 0v1.75m0-.5H9.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 5.5 2-2m0 0 2 2m-2-2v8m4-8H12l-2.5 3H12m-2.5 5V9.75a1.25 1.25 0 0 1 2.5 0v1.75m0-.5H9.5"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default OptionsSortDescending;
