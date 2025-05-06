import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-phone icon
 */
const FieldTypePhone: Icon = {
  name: 'field-type-phone',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.444 9.96v1.5a1 1 0 0 1-1.09 1 9.9 9.9 0 0 1-4.315-1.535 9.75 9.75 0 0 1-3-3A9.9 9.9 0 0 1 2.504 3.59 1 1 0 0 1 3.5 2.5H5a1 1 0 0 1 1 .86q.095.722.35 1.405a1 1 0 0 1-.225 1.055l-.635.635a8 8 0 0 0 3 3l.635-.635a1 1 0 0 1 1.055-.225q.683.255 1.405.35a1 1 0 0 1 .86 1.015"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypePhone;
