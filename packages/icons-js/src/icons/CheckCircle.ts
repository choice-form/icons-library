import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * check-circle icon
 */
const CheckCircle: Icon = {
  name: 'check-circle',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 7.5 2 2 4-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CheckCircle;
