import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * cycle icon
 */
const Cycle: Icon = {
  name: 'cycle',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5.5 2.5 2 2H6a3.5 3.5 0 1 0 0 7h.5M10.5 13.5l-2-2H10a3.5 3.5 0 1 0 0-7h-.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Cycle;
