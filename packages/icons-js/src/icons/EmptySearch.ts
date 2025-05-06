import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * empty-search icon
 */
const EmptySearch: Icon = {
  name: 'empty-search',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 6.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M4.5 4.5c0-2.5 4-2.5 4 0 0 2-2 1-2 3M15.5 15.5l-3-3M6.505 9.5v1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptySearch;
