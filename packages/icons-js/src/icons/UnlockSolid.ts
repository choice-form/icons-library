import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * unlock-solid icon
 */
const UnlockSolid: Icon = {
  name: 'unlock-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M9.5 8.5h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/><path d="M8.5 6.5V5a2.5 2.5 0 0 1 5 0v.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UnlockSolid;
