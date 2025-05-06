import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * check icon
 */
const Check: Icon = {
  name: 'check',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 7.5 3 3 4-6"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Check;
