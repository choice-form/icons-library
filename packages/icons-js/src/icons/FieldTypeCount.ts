import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-count icon
 */
const FieldTypeCount: Icon = {
  name: 'field-type-count',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 4.5h4m-4 2h.005m1.995 0h.005m1.995 0h.005M5.5 8.5h.005m1.995 0h.005m-2.005 2h.005m1.995 0h.005m2-2v2M4.5 2.5h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeCount;
