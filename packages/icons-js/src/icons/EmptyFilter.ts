import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * empty-filter icon
 */
const EmptyFilter: Icon = {
  name: 'empty-filter',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M7.5 4.5c-3.5 0-4 1-4 1s.5 1 4 1 4-1 4-1-.5-1-4-1"/><path stroke-linejoin="round" d="M2.5 6.5v.172a2 2 0 0 0 .586 1.414l3.121 3.121a1 1 0 0 1 .293.707V14.5l2 1v-3.586a1 1 0 0 1 .293-.707l3.121-3.121a2 2 0 0 0 .586-1.414V6.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyFilter;
