import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * search-small icon
 */
const SearchSmall: Icon = {
  name: 'search-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 12.5-2.15-2.15M7.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SearchSmall;
