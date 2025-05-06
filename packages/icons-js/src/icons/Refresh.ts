import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * refresh icon
 */
const Refresh: Icon = {
  name: 'refresh',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.606 11.008a5.5 5.5 0 1 1 .679-4.535"/><path d="M13.5 2.5v4l-3.969-.493"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Refresh;
