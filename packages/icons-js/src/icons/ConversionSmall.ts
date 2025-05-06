import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * conversion-small icon
 */
const ConversionSmall: Icon = {
  name: 'conversion-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 9.5h-11l4 4M2.5 6.5h11l-4-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ConversionSmall;
