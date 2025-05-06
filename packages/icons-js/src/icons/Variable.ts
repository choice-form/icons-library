import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * variable icon
 */
const Variable: Icon = {
  name: 'variable',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linejoin="round"><path d="M7.5 2.5 12 5v5l-4.5 2.5L3 10V5z"/><path stroke-linecap="round" d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Variable;
