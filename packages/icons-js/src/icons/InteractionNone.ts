import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-none icon
 */
const InteractionNone: Icon = {
  name: 'interaction-none',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.95 3.95 7.1 7.1M12.5 7.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionNone;
