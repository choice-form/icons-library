import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * options icon
 */
const Options: Icon = {
  name: 'options',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 10.5H3M5.5 13.5v-3M5.5 8.5v-6M13 5.5H8M10.5 2.5v3M10.5 7.5v6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Options;
