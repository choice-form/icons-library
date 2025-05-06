import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * swap-vertical-small icon
 */
const SwapVerticalSmall: Icon = {
  name: 'swap-vertical-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3 5 2.5-2.5L8 5M5.5 2.5v11M13 11l-2.5 2.5L8 11M10.5 2.5v11"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SwapVerticalSmall;
