import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * star icon
 */
const Star: Icon = {
  name: 'star',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 2.769 1.7 3.444 3.8.552-2.75 2.68.649 3.786L8 11.444l-3.399 1.787.649-3.786-2.75-2.68 3.8-.552z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Star;
