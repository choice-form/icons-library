import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-date icon
 */
const FieldTypeDate: Icon = {
  name: 'field-type-date',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1m-4 0h2M2.5 6.5h10M4.5 2.5v2m6-2v2M4.5 8.5h.005m1.995 0h.005m1.995 0h.005m-4.005 2h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeDate;
