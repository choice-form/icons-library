import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * view-duplicate icon
 */
const ViewDuplicate: Icon = {
  name: 'view-duplicate',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 6.5v-1a1 1 0 0 1 1-1h1m0 10h-1a1 1 0 0 1-1-1v-1m8 2h1a1 1 0 0 0 1-1v-1m-4 2h-2m-4-6v2M6.5 1.5h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ViewDuplicate;
