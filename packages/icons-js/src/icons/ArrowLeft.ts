import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * arrow-left icon
 */
const ArrowLeft: Icon = {
  name: 'arrow-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8h11M6.5 12l-4-4 4-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ArrowLeft;
