import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * double-line icon
 */
const DoubleLine: Icon = {
  name: 'double-line',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M5.5 8.5l2-2 3 3 3-3M6.5 10.5l1-1M10 6l3.5-3.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DoubleLine;
