import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * preferences icon
 */
const Preferences: Icon = {
  name: 'preferences',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 8V3M2.5 5.5h3M7.5 5.5h6M10.5 13V8M13.5 10.5h-3M8.5 10.5h-6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Preferences;
