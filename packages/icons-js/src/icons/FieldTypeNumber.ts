import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-number icon
 */
const FieldTypeNumber: Icon = {
  name: 'field-type-number',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5h8m-8 3h8m-5-6-1 9m4-9-1 9"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeNumber;
