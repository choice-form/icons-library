import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * radar icon
 */
const Radar: Icon = {
  name: 'radar',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10 11-3 1.5L2.5 10V5L7 2.5 10 4"/><path fill="currentColor" fill-opacity=".25" d="m13.5 4.5-5 3 5 3z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Radar;
