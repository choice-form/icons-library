import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * refresh-all icon
 */
const RefreshAll: Icon = {
  name: 'refresh-all',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M9.5 14.5 12 8l2.5 6.5M10.5 12.5h3"/><path d="M10.036 3.964A5 5 0 1 0 7.5 12.4"/><path stroke-linejoin="round" d="M7.5 4.5h3v-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RefreshAll;
