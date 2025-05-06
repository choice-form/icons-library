import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * border-t icon
 */
const BorderT: Icon = {
  name: 'border-t',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5h10"/><path stroke-opacity=".5" d="M2.5 4.5v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BorderT;
