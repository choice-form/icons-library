import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-primary icon
 */
const FieldPrimary: Icon = {
  name: 'field-primary',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-opacity=".25" d="m4.5 2.5 8 4-8 4z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5v12m10-7-8-4v8z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldPrimary;
