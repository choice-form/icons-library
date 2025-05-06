import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * yes-no icon
 */
const YesNo: Icon = {
  name: 'yes-no',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M7.5 13.5a6 6 0 0 0 0-12z"/><path d="M7.5 13.5a6 6 0 0 1 0-12"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default YesNo;
