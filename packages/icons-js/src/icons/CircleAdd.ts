import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-add icon
 */
const CircleAdd: Icon = {
  name: 'circle-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 5v6M5 8h6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleAdd;
