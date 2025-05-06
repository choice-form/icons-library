import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * reference-line icon
 */
const ReferenceLine: Icon = {
  name: 'reference-line',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-opacity=".25" d="M1.5 7.5h12m-6-6v12"/><path d="M12.5 4.5v-1a1 1 0 0 0-1-1h-1m2 8v1a1 1 0 0 1-1 1h-1m-8-2v1a1 1 0 0 0 1 1h1m-2-8v-1a1 1 0 0 1 1-1h1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ReferenceLine;
