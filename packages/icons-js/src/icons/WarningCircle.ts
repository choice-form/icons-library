import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * warning-circle icon
 */
const WarningCircle: Icon = {
  name: 'warning-circle',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/><path stroke-linecap="round" d="M7.5 4.5v4"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningCircle;
