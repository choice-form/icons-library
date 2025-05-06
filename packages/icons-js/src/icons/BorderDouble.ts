import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * border-double icon
 */
const BorderDouble: Icon = {
  name: 'border-double',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.5h10M2.5 8.5h10"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BorderDouble;
