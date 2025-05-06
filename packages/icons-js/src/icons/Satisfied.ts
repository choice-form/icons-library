import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * satisfied icon
 */
const Satisfied: Icon = {
  name: 'satisfied',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"/><path d="M12.388 9a4.5 4.5 0 0 1-8.776 0M3.5 6a1.5 1.5 0 0 1 3 0M9.5 6a1.5 1.5 0 0 1 3 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Satisfied;
