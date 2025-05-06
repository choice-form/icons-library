import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * format-left icon
 */
const FormatLeft: Icon = {
  name: 'format-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5.5 11-3-3 3-3M9.5 8h-7M13.5 3.5h-6M13.5 12.5h-6M13.5 9.5h-2M13.5 6.5h-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FormatLeft;
