import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * embed icon
 */
const Embed: Icon = {
  name: 'embed',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 5.5-2 2 2 2m6 0 2-2-2-2M9.5 3.5l-4 8"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Embed;
