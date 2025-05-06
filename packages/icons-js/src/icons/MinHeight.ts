import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * min-height icon
 */
const MinHeight: Icon = {
  name: 'min-height',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v3m0 0L9 4M7.5 5.5 6 4m1.5 8.5v-3m0 0L6 11m1.5-1.5L9 11m3.5-3.5h-10"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MinHeight;
