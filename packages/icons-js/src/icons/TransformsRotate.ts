import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * transforms-rotate icon
 */
const TransformsRotate: Icon = {
  name: 'transforms-rotate',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 8A4.5 4.5 0 1 0 8 3.5a4.88 4.88 0 0 0-3.37 1.37L3.5 6m0 0V3.5m0 2.5H6"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TransformsRotate;
