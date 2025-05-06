import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * logout icon
 */
const Logout: Icon = {
  name: 'logout',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 5 3 3-3 3M13.5 8h-8M7.5 13.5H4A1.5 1.5 0 0 1 2.5 12V4A1.5 1.5 0 0 1 4 2.5h3.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Logout;
