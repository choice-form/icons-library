import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * format-right icon
 */
const FormatRight: Icon = {
  name: 'format-right',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 5 3 3-3 3M13.5 8h-7M2.5 3.5h6M2.5 12.5h6M2.5 9.5h2M2.5 6.5h2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FormatRight;
