import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * arrow-up icon
 */
const ArrowUp: Icon = {
  name: 'arrow-up',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2.5v11M4 6.5l4-4 4 4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ArrowUp;
