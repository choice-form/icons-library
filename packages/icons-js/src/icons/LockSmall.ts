import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * lock-small icon
 */
const LockSmall: Icon = {
  name: 'lock-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 7.5h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LockSmall;
