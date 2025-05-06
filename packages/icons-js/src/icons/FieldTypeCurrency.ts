import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-currency icon
 */
const FieldTypeCurrency: Icon = {
  name: 'field-type-currency',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3v10M10 4.5H6.25a1.75 1.75 0 1 0 0 3.5h2.5a1.75 1.75 0 1 1 0 3.5H4.5"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeCurrency;
