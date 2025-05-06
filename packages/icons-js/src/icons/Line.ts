import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * line icon
 */
const Line: Icon = {
  name: 'line',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M12.5 3.5l-7 7m7-7v3m0-3h-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Line;
