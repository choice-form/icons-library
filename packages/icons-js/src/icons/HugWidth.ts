import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * hug-width icon
 */
const HugWidth: Icon = {
  name: 'hug-width',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5h4m0 0-2-2m2 2-2 2m9-2h-4m0 0 2 2m-2-2 2-2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default HugWidth;
