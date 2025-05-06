import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * artificial-intelligence icon
 */
const ArtificialIntelligence: Icon = {
  name: 'artificial-intelligence',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linejoin="round"><path d="M8 2.5C8 5.814 10.186 8 13.5 8 10.186 8 8 10.186 8 13.5 8 10.186 5.814 8 2.5 8 5.814 8 8 5.814 8 2.5Z"/><path stroke-linecap="round" d="M10.5 4.5h2M3.5 11.5h2M11.5 3.5v2M4.5 10.5v2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ArtificialIntelligence;
