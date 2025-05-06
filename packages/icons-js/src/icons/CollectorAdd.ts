import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * collector-add icon
 */
const CollectorAdd: Icon = {
  name: 'collector-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 4.5h-3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3M13 4.5h-3M11.5 6V3M14.5 4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CollectorAdd;
