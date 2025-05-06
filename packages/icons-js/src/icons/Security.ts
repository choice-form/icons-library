import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * security icon
 */
const Security: Icon = {
  name: 'security',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 1.5-5 3c0 6 5 9 5 9s5-3 5-9z"/><path fill="currentColor" fill-opacity=".25" d="M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M7.5 7.5v2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Security;
