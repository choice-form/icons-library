import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-system-user icon
 */
const FieldTypeSystemUser: Icon = {
  name: 'field-type-system-user',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M3.5 12.5a3 3 0 0 1 3-3h1m2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path stroke="#05F" d="M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeSystemUser;
