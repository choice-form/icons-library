import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * history icon
 */
const History: Icon = {
  name: 'history',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M3.964 4.964A5 5 0 1 1 2.5 8.5"/><path stroke-linejoin="round" d="M6.5 5.5h-3v-3M10.5 8.5h-3v2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default History;
