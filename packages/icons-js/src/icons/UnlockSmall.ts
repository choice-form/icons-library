import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * unlock-small icon
 */
const UnlockSmall: Icon = {
  name: 'unlock-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 7.5h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M8.5 7V5a2.5 2.5 0 0 1 5 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UnlockSmall;
