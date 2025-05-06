import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-formula icon
 */
const FieldTypeFormula: Icon = {
  name: 'field-type-formula',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5H9.988a2 2 0 0 0-1.916 1.425l-2.144 7.15A2 2 0 0 1 4.012 12.5H2.5M3.5 6.5h7M12.5 12.5l-3-3m3 0-3 3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeFormula;
