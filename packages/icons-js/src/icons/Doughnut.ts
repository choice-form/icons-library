import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * doughnut icon
 */
const Doughnut: Icon = {
  name: 'doughnut',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M9.5 5V2.6a5.01 5.01 0 0 1 3.9 3.9H11C11 6 10 5 9.5 5"/><path d="M2.5 8.5a5 5 0 0 0 10 0h-3a2 2 0 1 1-2-2v-3a5 5 0 0 0-5 5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Doughnut;
