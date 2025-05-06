import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * padding-b icon
 */
const PaddingB: Icon = {
  name: 'padding-b',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12.5h10"/><path stroke-opacity=".5" d="M10.5 9.5v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default PaddingB;
