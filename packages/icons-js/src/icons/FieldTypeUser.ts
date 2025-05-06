import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeUser icon
 */
const FieldTypeUser: Icon = {
  name: 'field-type-user',
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
      d: "M3.5 12.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3m-2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 12.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3m-2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeUser;
