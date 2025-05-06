import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-primary icon
 */
const FieldTypePrimary: Icon = {
  name: 'field-type-primary',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 2.5v10M11.5 6.5l-6-3v6z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypePrimary;
