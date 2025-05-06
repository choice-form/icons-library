import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * max-width icon
 */
const MaxWidth: Icon = {
  name: 'max-width',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h6m-6 0L6 6M4.5 7.5 6 9m4.5-1.5L9 9m1.5-1.5L9 6m-6.5 6.5v-10m10 10v-10"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MaxWidth;
