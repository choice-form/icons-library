import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * quadrant icon
 */
const Quadrant: Icon = {
  name: 'quadrant',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 4.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Quadrant;
