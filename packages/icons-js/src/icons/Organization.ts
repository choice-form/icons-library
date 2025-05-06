import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * organization icon
 */
const Organization: Icon = {
  name: 'organization',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 5.5h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m3 0h4a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1M4.5 7.5h.005m-.005 2h.005m-.005 2h.005M9.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Organization;
