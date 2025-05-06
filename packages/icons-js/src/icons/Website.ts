import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * website icon
 */
const Website: Icon = {
  name: 'website',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M7.5 1.5c-3 3-3 9 0 12M7.5 1.5c3 3 3 9 0 12M2 5.5h11m-11 4h11"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Website;
