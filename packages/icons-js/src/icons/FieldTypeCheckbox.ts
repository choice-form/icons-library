import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-checkbox icon
 */
const FieldTypeCheckbox: Icon = {
  name: 'field-type-checkbox',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 8 1 1 2-2m-5-3.5h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeCheckbox;
