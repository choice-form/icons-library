import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * welcome icon
 */
const Welcome: Icon = {
  name: 'welcome',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 2.5h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-11M3.5 4.5v3m0 0v3m0-3h3m0-3v6m3-2v2M9.5 6.5h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Welcome;
