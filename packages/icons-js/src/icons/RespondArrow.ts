import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * respond-arrow icon
 */
const RespondArrow: Icon = {
  name: 'respond-arrow',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 8-5-4.5v3c-2.773 0-6 1.233-6 6a6.62 6.62 0 0 1 6-3v3z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RespondArrow;
