import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * fixed-width icon
 */
const FixedWidth: Icon = {
  name: 'fixed-width',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5h10m-10 0v-2m0 2v2m10-2v2m0-2v-2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FixedWidth;
