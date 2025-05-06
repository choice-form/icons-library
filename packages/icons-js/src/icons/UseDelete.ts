import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * use-delete icon
 */
const UseDelete: Icon = {
  name: 'use-delete',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h2M12.914 10.914l-2.828-2.828m0 2.828 2.828-2.828"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UseDelete;
