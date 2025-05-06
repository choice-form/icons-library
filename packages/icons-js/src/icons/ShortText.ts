import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * short-text icon
 */
const ShortText: Icon = {
  name: 'short-text',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 13.5h13M11.5 10.5 8 1.5l-3.5 9M5.667 7.5h4.666"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ShortText;
