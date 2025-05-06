import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * sharing icon
 */
const Sharing: Icon = {
  name: 'sharing',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 3.5H12A1.5 1.5 0 0 1 13.5 5v7a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12v-1.5"/><path d="m2.5 6 4-3.5v2c2.312 0 5 1.23 5 5-1.142-1.848-3.168-2-5-2v2z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Sharing;
