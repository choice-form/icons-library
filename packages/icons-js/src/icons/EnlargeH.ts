import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * enlarge-h icon
 */
const EnlargeH: Icon = {
  name: 'enlarge-h',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 11.5 2.5 8l3-3.5M10.5 4.5l3 3.5-3 3.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EnlargeH;
