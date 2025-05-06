import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-auto-number icon
 */
const FieldTypeAutoNumber: Icon = {
  name: 'field-type-auto-number',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3.5 1-1v4M3 9.5s0-1 1-1 1 1 1 1c0 .5-.5 1-1 1.5-1.5 1.5-1 1.5-1 1.5h2M10 12.5 7.5 10m2.5 2.5 2.5-2.5M10 12.5v-10"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeAutoNumber;
