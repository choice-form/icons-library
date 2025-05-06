import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * transforms-scale icon
 */
const TransformsScale: Icon = {
  name: 'transforms-scale',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 3.5H4.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8M9 9.5H6.5m0 0V7m0 2.5 6-6m0 0H10m2.5 0V6"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TransformsScale;
