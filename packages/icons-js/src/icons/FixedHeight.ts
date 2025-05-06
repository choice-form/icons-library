import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * fixed-height icon
 */
const FixedHeight: Icon = {
  name: 'fixed-height',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v10m0-10h2m-2 0h-2m2 10h-2m2 0h2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FixedHeight;
