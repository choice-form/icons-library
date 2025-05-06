import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * linked-disassociate icon
 */
const LinkedDisassociate: Icon = {
  name: 'linked-disassociate',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 6.5h7m0 0-2-2m2 2-2 2M2.5 1.5h11m-11 10h4m5-5h2M10 10l3 3m0-3-3 3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LinkedDisassociate;
