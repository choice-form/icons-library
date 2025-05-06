import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * address icon
 */
const Address: Icon = {
  name: 'address',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.603 7.192C12.536 4.392 10.452 1.5 7.5 1.5S2.464 4.392 3.397 7.192C4.191 9.572 7.5 13.5 7.5 13.5s3.31-3.928 4.103-6.308"/><path d="M5.5 5.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Address;
