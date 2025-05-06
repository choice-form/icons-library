import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * duplicate-new icon
 */
const DuplicateNew: Icon = {
  name: 'duplicate-new',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><rect width="9" height="9" x="5" y="5" rx="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.5 8v1.5m0 1.5V9.5m0 0H8m1.5 0H11"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DuplicateNew;
