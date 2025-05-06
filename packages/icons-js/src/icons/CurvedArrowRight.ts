import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * curved-arrow-right icon
 */
const CurvedArrowRight: Icon = {
  name: 'curved-arrow-right',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10 6 3.5 3.5L10 13"/><path d="M13.5 9.5H6a3.5 3.5 0 1 1 0-7h3.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CurvedArrowRight;
