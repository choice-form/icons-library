import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * empty-sort icon
 */
const EmptySort: Icon = {
  name: 'empty-sort',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M4.5 5.5v9m0 0L2 12m2.5 2.5L7 12m3.5 2.5v-9m0 0L13 8m-2.5-2.5L8 8"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptySort;
