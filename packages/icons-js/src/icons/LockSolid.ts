import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * lock-solid icon
 */
const LockSolid: Icon = {
  name: 'lock-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M11.5 8.5h-7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/><path d="M5.5 6.5V5a2.5 2.5 0 0 1 5 0v1.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LockSolid;
