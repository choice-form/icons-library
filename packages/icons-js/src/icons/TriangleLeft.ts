import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * triangle-left icon
 */
const TriangleLeft: Icon = {
  name: 'triangle-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.5v11L3.5 8z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TriangleLeft;
