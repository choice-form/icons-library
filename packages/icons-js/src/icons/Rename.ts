import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * rename icon
 */
const Rename: Icon = {
  name: 'rename',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 2.5h1m0 0h1m-1 0v11m-1 0h2M7.5 4.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5m4-7h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Rename;
