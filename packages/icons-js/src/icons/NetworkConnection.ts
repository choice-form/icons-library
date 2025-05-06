import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * network-connection icon
 */
const NetworkConnection: Icon = {
  name: 'network-connection',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.713 5.394 6.288 7.106M9.713 10.606 6.288 8.894M11.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default NetworkConnection;
