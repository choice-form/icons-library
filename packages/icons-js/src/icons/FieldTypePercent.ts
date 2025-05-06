import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-percent icon
 */
const FieldTypePercent: Icon = {
  name: 'field-type-percent',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 3.5-8 8M6 4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m5.5 5.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypePercent;
