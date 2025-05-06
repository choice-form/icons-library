import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * divider icon
 */
const Divider: Icon = {
  name: 'divider',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 3.5h2m3 0h2m3 0h2M1.5 11.5h2m3 0h2m3 0h2M1.5 7.5h12"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Divider;
