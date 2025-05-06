import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeCurrency icon
 */
const FieldTypeCurrency: Icon = {
  name: 'field-type-currency',
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
      d: "M7.5 3v10M10 4.5H6.25a1.75 1.75 0 1 0 0 3.5h2.5a1.75 1.75 0 1 1 0 3.5H4.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3v10M10 4.5H6.25a1.75 1.75 0 1 0 0 3.5h2.5a1.75 1.75 0 1 1 0 3.5H4.5"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeCurrency;
