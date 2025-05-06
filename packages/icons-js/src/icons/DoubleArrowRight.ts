import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * double-arrow-right icon
 */
const DoubleArrowRight: Icon = {
  name: 'double-arrow-right',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3.5 2.5 6 5.5-6 5.5"/><path d="m7.5 2.5 6 5.5-6 5.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DoubleArrowRight;
