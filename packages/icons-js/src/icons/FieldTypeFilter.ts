import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-filter icon
 */
const FieldTypeFilter: Icon = {
  name: 'field-type-filter',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 4.5 8.5 8v4.5l-2-1V8l-3-3.5m3 0h2M2.5 2.5h10"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeFilter;
