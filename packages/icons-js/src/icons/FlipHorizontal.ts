import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * flip-horizontal icon
 */
const FlipHorizontal: Icon = {
  name: 'flip-horizontal',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v10m-5-8 3 3-3 3zm10 6-3-3 3-3z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FlipHorizontal;
