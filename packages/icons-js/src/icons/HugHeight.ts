import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * hug-height icon
 */
const HugHeight: Icon = {
  name: 'hug-height',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v4m0 0 2-2m-2 2-2-2m2 9v-4m0 0-2 2m2-2 2 2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default HugHeight;
