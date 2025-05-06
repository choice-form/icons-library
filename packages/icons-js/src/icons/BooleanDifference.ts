import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * boolean-difference icon
 */
const BooleanDifference: Icon = {
  name: 'boolean-difference',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1"/><path fill="currentColor" fill-opacity=".25" d="M2.5 3.5v5a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h3v-2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BooleanDifference;
