import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * enlarge icon
 */
const Enlarge: Icon = {
  name: 'enlarge',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11.5 10.5-3.5 3-3.5-3M4.5 5.5l3.5-3 3.5 3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Enlarge;
