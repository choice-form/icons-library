import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * dynamic-value icon
 */
const DynamicValue: Icon = {
  name: 'dynamic-value',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M1.5 2.5h12m-12 3h12m-12 3h6m-6 3h6"/><path stroke-linejoin="round" d="M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DynamicValue;
