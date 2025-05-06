import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-text icon
 */
const FieldTypeText: Icon = {
  name: 'field-type-text',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3.5 11.5 4-8 4 8M5 8.5h5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeText;
