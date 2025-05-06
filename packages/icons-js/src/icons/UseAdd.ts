import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * use-add icon
 */
const UseAdd: Icon = {
  name: 'use-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h2M13.5 9.5h-4m2 2v-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UseAdd;
