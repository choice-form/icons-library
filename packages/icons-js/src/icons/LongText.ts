import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * long-text icon
 */
const LongText: Icon = {
  name: 'long-text',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 1.5h3m-3 4h3m-3 4h3m-13 4h13M8.5 10.5 5 1.5l-3.5 9M2.667 7.5h4.666"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LongText;
