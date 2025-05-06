import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * rounded-small icon
 */
const RoundedSmall: Icon = {
  name: 'rounded-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 3.5h-11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RoundedSmall;
