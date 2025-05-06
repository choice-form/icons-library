import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * max-height icon
 */
const MaxHeight: Icon = {
  name: 'max-height',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 4.5v6m0-6L9 6M7.5 4.5 6 6m1.5 4.5L6 9m1.5 1.5L9 9M2.5 2.5h10m-10 10h10"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MaxHeight;
