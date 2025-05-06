import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-array icon
 */
const FieldTypeArray: Icon = {
  name: 'field-type-array',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1m6-8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1M4.5 7.5h.005M7.5 7.5h.005M10.5 7.5h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeArray;
