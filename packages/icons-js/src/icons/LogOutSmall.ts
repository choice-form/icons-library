import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * log-out-small icon
 */
const LogOutSmall: Icon = {
  name: 'log-out-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 4.5 3 3m0 0-3 3m3-3h-8M5.5 2.5h-1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LogOutSmall;
