import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-single-select icon
 */
const FieldTypeSingleSelect: Icon = {
  name: 'field-type-single-select',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M8.5 4.5h4m-4 6h4M2.5 10.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4.5 4.5h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeSingleSelect;
