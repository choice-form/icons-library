import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * sticky-top icon
 */
const StickyTop: Icon = {
  name: 'sticky-top',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 5h6m-5 6H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M8 7v6m0-6L6.5 8.5M8 7l1.5 1.5"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default StickyTop;
