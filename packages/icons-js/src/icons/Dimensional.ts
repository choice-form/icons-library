import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * dimensional icon
 */
const Dimensional: Icon = {
  name: 'dimensional',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.5v5m0-5-5-3m5 3 5-3m-5 8-5-3v-5m5 8 5-3v-5m-10 0 5-3 5 3"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Dimensional;
