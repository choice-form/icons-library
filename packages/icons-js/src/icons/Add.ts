import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * add icon
 */
const Add: Icon = {
  name: 'add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 2.5v11M2.5 8h11"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Add;
