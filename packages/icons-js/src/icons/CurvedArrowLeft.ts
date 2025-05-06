import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * curved-arrow-left icon
 */
const CurvedArrowLeft: Icon = {
  name: 'curved-arrow-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5H10a3.5 3.5 0 1 0 0-7H6.5"/><path d="M6 6 2.5 9.5 6 13"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CurvedArrowLeft;
