import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * mixed icon
 */
const Mixed: Icon = {
  name: 'mixed',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/><path stroke-opacity=".5" d="M9 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Mixed;
