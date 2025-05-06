import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-time icon
 */
const FieldTypeTime: Icon = {
  name: 'field-type-time',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 2.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/><path d="M7.5 4.5v3h2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeTime;
