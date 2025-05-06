import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * collector icon
 */
const Collector: Icon = {
  name: 'collector',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 3.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7.5 3.5h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Collector;
