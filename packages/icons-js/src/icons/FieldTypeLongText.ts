import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-long-text icon
 */
const FieldTypeLongText: Icon = {
  name: 'field-type-long-text',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5.5h3M8.5 3.5h4m-4 3h4m-10 3h10m-10 3h6M2.5 6.5l2-4 2 4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeLongText;
