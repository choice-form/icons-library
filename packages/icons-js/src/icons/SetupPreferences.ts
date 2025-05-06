import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * setup-preferences icon
 */
const SetupPreferences: Icon = {
  name: 'setup-preferences',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 4.5h4M1.5 4.5h2M5.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 10.5h-4M14.5 10.5h-2M10.5 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SetupPreferences;
