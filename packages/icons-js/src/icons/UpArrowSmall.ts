import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * up-arrow-small icon
 */
const UpArrowSmall: Icon = {
  name: 'up-arrow-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 10.5 5.5-6 5.5 6"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UpArrowSmall;
