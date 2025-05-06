import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * bolt-solid icon
 */
const BoltSolid: Icon = {
  name: 'bolt-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 8.5 7-7-2 5 4 1-7 7 2-5z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BoltSolid;
