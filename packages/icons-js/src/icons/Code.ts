import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * code icon
 */
const Code: Icon = {
  name: 'code',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 5 2.5 7.5 5 10m5 0 2.5-2.5L10 5"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Code;
