import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-user icon
 */
const FieldTypeUser: Icon = {
  name: 'field-type-user',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 12.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3m-2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeUser;
