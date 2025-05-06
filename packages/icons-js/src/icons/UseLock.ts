import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * use-lock icon
 */
const UseLock: Icon = {
  name: 'use-lock',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h3"/><path fill="currentColor" fill-opacity=".25" d="M13.5 10.5h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M10.5 10V9a1.5 1.5 0 0 1 3 0v1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UseLock;
