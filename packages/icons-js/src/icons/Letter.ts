import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * letter icon
 */
const Letter: Icon = {
  name: 'letter',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5v-1h8v1M7.5 3.5V11M6 11.5h3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Letter;
