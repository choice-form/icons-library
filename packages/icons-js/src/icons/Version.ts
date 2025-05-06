import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * version icon
 */
const Version: Icon = {
  name: 'version',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linejoin="round"><path d="m7.5 1.5-6 3 6 3 6-3z"/><path stroke-linecap="round" d="m1.5 7.5 6 3 6-3M1.5 10.5l6 3 6-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Version;
