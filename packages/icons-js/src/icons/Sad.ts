import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * sad icon
 */
const Sad: Icon = {
  name: 'sad',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"/><path fill="currentColor" d="M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 11.2a3.5 3.5 0 0 1 6 0"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Sad;
