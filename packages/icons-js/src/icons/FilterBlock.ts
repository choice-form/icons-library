import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * filter-block icon
 */
const FilterBlock: Icon = {
  name: 'filter-block',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M1.5 2.5h12m-8 2h4M2.5 4.5l4 4v3m6-7-2 2"/><path fill="currentColor" fill-opacity=".25" d="M13.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FilterBlock;
