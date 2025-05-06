import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * trash icon
 */
const Trash: Icon = {
  name: 'trash',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 3.5h2m0 0v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9m-8 0h2m8 0h-2m0 0h-2m-4 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1m-4 0h4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Trash;
