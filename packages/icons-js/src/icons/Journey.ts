import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * journey icon
 */
const Journey: Icon = {
  name: 'journey',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12m0 0-2-2m2 2-2 2m1 2v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-3M7.5 9.5v2m3-2v2m-6-2v2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Journey;
