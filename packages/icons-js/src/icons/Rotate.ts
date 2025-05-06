import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * rotate icon
 */
const Rotate: Icon = {
  name: 'rotate',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.5 3.5v10h10"/><path d="M8 13a5 5 0 0 0-5-5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Rotate;
