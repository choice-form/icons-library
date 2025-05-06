import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeLookup icon
 */
const FieldTypeLookup: Icon = {
  name: 'field-type-lookup',
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
      d: "M12.5 12.5 11 11M2.5 2.5h10m-10 3h10m-10 3h3m-3 3h3m6-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5 11 11M2.5 2.5h10m-10 3h10m-10 3h3m-3 3h3m6-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeLookup;
